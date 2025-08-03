import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { UserSchema } from "./data-transfer-object/users.dto";

@Injectable()
export class UserRepository {
  private readonly allUsersKey = "users";
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async create(user: UserSchema) {
    const userKey = `user:${user.email}`;
    // Check if user already exists
    const existingUser = await this.cacheManager.get(userKey);
    if (existingUser)
      throw new ConflictException("User with this email already exists");

    console.log("existing: ", existingUser);
    // Store the new user with a 1-hour TTL
    await this.cacheManager.set(userKey, user, 3600000);

    // Add the new user's key to our list of all users
    let allUserKeys =
      (await this.cacheManager.get<string[]>(this.allUsersKey)) || [];
    allUserKeys.push(userKey);
    // Update the list of all user keys, also with a 1-hour TTL
    await this.cacheManager.set(this.allUsersKey, allUserKeys, 3600000);

    console.log("keys: ", allUserKeys);
    return user;
  }
  async findAll() {
    const allUserKeys =
      (await this.cacheManager.get<string[]>(this.allUsersKey)) || [];
    const users = await Promise.all(
      allUserKeys.map((key) => this.cacheManager.get(key)),
    );
    return users.filter(Boolean); // Filter out any keys that might have expired
  }
  async findByEmail(email: UserSchema["email"]) {
    const userKey = `user:${email}`;
    return await this.cacheManager.get<UserSchema>(userKey);
  }
}
