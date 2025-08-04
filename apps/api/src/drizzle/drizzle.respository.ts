import { Inject } from "@nestjs/common";
import { DRIZZLE_PROVIDER } from "./drizzle.provider";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

export abstract class DrizzleRepository {
  constructor(
    @Inject(DRIZZLE_PROVIDER) protected readonly db: NodePgDatabase,
    @Inject(CACHE_MANAGER) protected cacheManager: Cache,
  ) {}
}
