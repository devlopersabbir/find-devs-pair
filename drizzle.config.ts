import { defineConfig } from "drizzle-kit";
import config from "@/config";

if (!config.DATABASE_URI) throw new Error("DATABASE_URL is missing");

export default defineConfig({
  schema: "./src/schemas/*",
  out: "./drizzle",
  driver: "pg",
  strict: true,
  dbCredentials: {
    connectionString: config.DATABASE_URI,
  },
});
