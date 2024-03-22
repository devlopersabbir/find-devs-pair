import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { DATABASE_URI } from "../../drizzle.config";
import { accounts, sessions, users, verificationTokens } from "@/schemas";

const pool = new Pool({
  connectionString: DATABASE_URI,
});

export const db = drizzle(pool, {
  schema: {
    accounts,
    sessions,
    users,
    verificationTokens,
  },
});
