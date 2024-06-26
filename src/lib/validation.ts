import { z } from "zod";

export const createRoomSchema = z.object({
  name: z.string().min(1).max(50),
  description: z.string().min(1).max(100),
  tags: z.string(),
  githubRepo: z.string().default(""),
});
