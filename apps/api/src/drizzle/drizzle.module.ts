import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { DrizzleProvider } from "./drizzle.provider";
import { CacheModule } from "@nestjs/cache-manager";
import { RedisOptions } from "src/configs/app-options.constants";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync(RedisOptions),
  ],
  providers: [DrizzleProvider],
  exports: [DrizzleProvider],
})
export class DrizzleModule {}
