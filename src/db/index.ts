import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "@/schemas";
import config from "@/config";

const pool = new Pool({
  connectionString: config.DATABASE_URI,
});
declare global {
  var db: NodePgDatabase<typeof schema> | undefined;
}
let db: NodePgDatabase<typeof schema>;
if (process.env.NODE_ENV === "production") {
  db = drizzle(pool, {
    schema,
  });
} else {
  if (!global.db) {
    global.db = drizzle(pool, {
      schema,
    });
  }
  db = global.db;
}

export { db };
