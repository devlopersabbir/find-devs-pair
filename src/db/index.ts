import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { DATABASE_URI } from "../../drizzle.config";
import * as schema from "@/schemas";

const pool = new Pool({
  connectionString: DATABASE_URI,
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
