import { Injectable } from "@nestjs/common";
import { UserRepository } from "./users.repository";
import { UserSchema } from "./data-transfer-object/users.dto";

@Injectable()
export class UsersService {
  constructor(private readonly repository: UserRepository) {}

  async store(input: UserSchema) {
    return await this.repository.create(input);
  }
  async index() {
    return await this.repository.findAll();
  }
}
