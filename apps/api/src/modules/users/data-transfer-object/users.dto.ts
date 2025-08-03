import { z } from "zod";

export const userSchema = z.object({
  fullName: z.string().min(1, "Full name is required").optional(),
  email: z.email().endsWith("@gmail.com"),
  bio: z.string().min(10).optional(),
  age: z.number().positive().optional(),
  country: z.string().optional(),

  languages: z.string().default("english"),
  goal: z.string().default("make connections"),

  avatarUrl: z.url("Invalid URL").optional(),
  imageGallery: z.array(z.string()).optional(),
});

export type UserSchema = z.infer<typeof userSchema>;
