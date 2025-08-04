import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "./users.repository";
import { UserSchema } from "./data-transfer-object/users.dto";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";

@Injectable()
export class UsersService {
  private readonly allUsersKey = "users";
  constructor(
    private readonly repository: UserRepository,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async store(user: UserSchema) {
    const userKey = `user:${user.email}`;
    // Check if user already exists
    const existingUser = await this.cacheManager.get(userKey);
    if (existingUser)
      throw new ConflictException("User with this email already exists");

    // Store the new user with a 1-hour TTL
    await this.cacheManager.set(userKey, user, 3600000);
    await this.repository.create(user);

    // Add the new user's key to our list of all users
    let allUserKeys =
      (await this.cacheManager.get<string[]>(this.allUsersKey)) || [];
    allUserKeys.push(userKey);
    // Update the list of all user keys, also with a 1-hour TTL
    await this.cacheManager.set(this.allUsersKey, allUserKeys, 3600000);

    return user;
  }
  async index() {
    const allUserKeys =
      (await this.cacheManager.get<string[]>(this.allUsersKey)) || [];
    const users = await Promise.all(
      allUserKeys.map((key) => this.cacheManager.get(key)),
    );
    return users.filter(Boolean); // Filter out any keys that might have expired
  }
}
