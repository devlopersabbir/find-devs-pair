import { CacheModuleAsyncOptions } from "@nestjs/cache-manager";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { createKeyv } from "@keyv/redis";
import { Keyv } from "keyv";
import { CacheableMemory } from "cacheable";

export const RedisOptions: CacheModuleAsyncOptions = {
  isGlobal: true,
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const host = configService.get<string>("REDIS_HOST");
    const port = parseInt(configService.get<string>("REDIS_PORT")!, 10);

    return {
      stores: [
        new Keyv({
          store: new CacheableMemory({ ttl: 3600000 }),
        }),
        createKeyv(`redis://${host}:${port}`),
      ],
    };
  },
  inject: [ConfigService],
};
