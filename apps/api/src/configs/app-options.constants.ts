import { CacheModuleAsyncOptions } from "@nestjs/cache-manager";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { createKeyv } from "@keyv/redis";
import { Keyv } from "keyv";
import { CacheableMemory } from "cacheable";

export const RedisOptions: CacheModuleAsyncOptions = {
  isGlobal: true,
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const REDIS_URL = configService.get<string>("REDIS_URL");

    return {
      stores: [
        new Keyv({
          store: new CacheableMemory({ ttl: 3600000 }),
        }),
        createKeyv(REDIS_URL),
      ],
    };
  },
  inject: [ConfigService],
};
