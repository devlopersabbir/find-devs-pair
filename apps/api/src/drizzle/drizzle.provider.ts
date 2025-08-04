import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

export const DRIZZLE_PROVIDER = Symbol("DRIZZLE_PROVIDER");
export const DrizzleProvider = {
  provide: DRIZZLE_PROVIDER,
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const DATABASE_URL = configService.get<string>("DATABASE_URL");

    const pool = new Pool({
      connectionString: DATABASE_URL,
    });
    return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
  },
};
