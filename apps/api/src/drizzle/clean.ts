import "dotenv/config";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const main = async () => {
  const connectionString = process.env.DATABASE_URL!;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  const pool = new Pool({
    connectionString,
  });

  const db = drizzle(pool);
  try {
    await db.transaction(async (tx) => {
      // Terminate all connections except our own
      await tx.execute(sql`
        SELECT pg_terminate_backend(pid)
        FROM pg_stat_activity
        WHERE pid <> pg_backend_pid()
        AND datname = current_database();
      `);

      // Drop all schemas (including public and drizzle)
      await tx.execute(sql`
        DO $$ DECLARE
          r RECORD;
        BEGIN
          FOR r IN (SELECT nspname FROM pg_namespace WHERE nspname NOT LIKE 'pg_%' AND nspname != 'information_schema')
          LOOP
            EXECUTE 'DROP SCHEMA IF EXISTS ' || quote_ident(r.nspname) || ' CASCADE';
          END LOOP;
        END $$;
      `);

      // Recreate public schema
      await tx.execute(sql`CREATE SCHEMA public;`);

      // Reset all sequences
      await tx.execute(sql`
        DO $$ DECLARE
          r RECORD;
        BEGIN
          FOR r IN (SELECT sequencename FROM pg_sequences WHERE schemaname = 'public')
          LOOP
            EXECUTE 'ALTER SEQUENCE ' || quote_ident(r.sequencename) || ' RESTART WITH 1';
          END LOOP;
        END $$;
      `);

      // Reset search path
      await tx.execute(sql`SELECT set_config('search_path', 'public', false);`);

      // Grant privileges back to public
      await tx.execute(sql`
        GRANT ALL ON SCHEMA public TO public;
        GRANT ALL ON ALL TABLES IN SCHEMA public TO public;
        GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO public;
      `);
    });

    console.info("✅ CLEANING COMPLETED");
  } catch (error) {
    console.error("Error clearing database:", error);
    throw error;
  }
};

main()
  .catch((error) => {
    console.error("Fatal error:", error);
    process.exit(1);
  })
  .finally(() => process.exit(0));
