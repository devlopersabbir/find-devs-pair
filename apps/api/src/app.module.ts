import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users/users.module";
import { DrizzleModule } from "./drizzle/drizzle.module";

@Module({
  imports: [DrizzleModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
