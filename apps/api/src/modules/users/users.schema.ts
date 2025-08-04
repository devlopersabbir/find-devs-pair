import { pgTable, serial, text, varchar, boolean } from "drizzle-orm/pg-core";

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  bio: text("bio"),
  avatarUrl: text("avater_url"),
  isOnline: boolean("is_online").notNull().default(false),
});

export default users;
