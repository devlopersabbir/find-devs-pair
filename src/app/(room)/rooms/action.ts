"use server";

import config from "@/config";
import { getSession } from "@/lib/auth";
import { StreamChat } from "stream-chat";

export async function generateToken() {
  const session = await getSession();
  if (!session) throw new Error("No session found!");

  const serverClient = StreamChat.getInstance(
    config.NEXT_PUBLIC_GET_STREAM_API_KEY,
    config.GET_STREAM_IO_SECRET
  );
  const token = serverClient.createToken(session.user.id);
  return token;
}
