import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { UserRepository } from "./users.repository";

@Module({
  // imports: [DrizzleModule],
  controllers: [UsersController],
  providers: [UserRepository, UsersService],
  exports: [UserRepository],
})
export class UsersModule {}
