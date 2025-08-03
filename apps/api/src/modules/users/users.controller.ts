import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ZodValidationPipe } from "src/pipes";
import { UserSchema, userSchema } from "./data-transfer-object/users.dto";

@Controller({ path: "users", version: "v1" })
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post("register")
  @UsePipes(new ZodValidationPipe(userSchema))
  async store(@Body() body: UserSchema) {
    try {
      const user = await this.service.store(body);
      return user;
    } catch (err) {
      return err;
    }
  }
  @Get("/")
  async index() {
    return await this.service.index();
  }
}
