import { Injectable } from "@nestjs/common";
import { UserSchema } from "./data-transfer-object/users.dto";
import { DrizzleRepository } from "src/drizzle/drizzle.respository";
import users from "./users.schema";

@Injectable()
export class UserRepository extends DrizzleRepository {
  async create(user: UserSchema) {
    const [data] = await this.db.insert(users).values(user).returning();
    return data;
  }
  async findAll() {}
  async findByEmail(email: UserSchema["email"]) {
    const userKey = `user:${email}`;
    return await this.cacheManager.get<UserSchema>(userKey);
  }
}
