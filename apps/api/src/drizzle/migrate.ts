import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

async function main() {
  const connectionString = process.env.DATABASE_URL!;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  const pool = new Pool({
    connectionString,
  });

  const db = drizzle(pool);

  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "./src/drizzle/migrations" });
  console.log("Migrations complete.");

  await pool.end();
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
