import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { ConfigModule } from "@nestjs/config";
import { CacheModule } from "@nestjs/cache-manager";
import { RedisOptions } from "./configs/app-options.constants";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync(RedisOptions),

    UsersModule,
    // ChatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
