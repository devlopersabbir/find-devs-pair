import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const config = z.object({
  DATABASE_URI: z.string({
    description: "Database URI is not found!",
  }),
  GITHUB_ID: z.string({
    description: "Github ID is not found!",
  }),
  GITHUB_SECRET: z.string({
    description: "Github SECRET is not found!",
  }),
  NEXTAUTH_SECRET: z.string({
    description: "Next auth SECRET is not found!",
  }),
  NEXT_PUBLIC_GET_STREAM_API_KEY: z.string({
    description: "Strem IO Key is not found!",
  }),
  GET_STREAM_IO_SECRET: z.string({
    description: "Stream IO SECRET is not found!",
  }),
});

type TConfig = z.infer<typeof config>;

export default {
  DATABASE_URI: process.env.DATABASE_URI!,
  GITHUB_ID: process.env.GITHUB_ID!,
  GITHUB_SECRET: process.env.GITHUB_SECRET!,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET!,
  NEXT_PUBLIC_GET_STREAM_API_KEY: process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!,
  GET_STREAM_IO_SECRET: process.env.GET_STREAM_IO_SECRET!,
} satisfies TConfig;
