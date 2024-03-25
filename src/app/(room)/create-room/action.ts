"use server";

import { db } from "@/db";
import { getSession } from "@/lib/auth";
import { createRoomSchema } from "@/lib/validation";
import { TRoom, room } from "@/schemas";

export async function createRoomAction(inputs: Omit<TRoom, "id" | "userId">) {
  const { success } = createRoomSchema.safeParse(inputs);
  if (!success) throw new Error("Invalid inputs");
  console.log("inputs: ", inputs);
  // TODO: creating a new room
  try {
    const session = await getSession();
    if (!session) throw new Error("You must be logged in!");
    await db.insert(room).values({ ...inputs, userId: session.user.id });
    return "Success :)";
  } catch (error) {
    throw new Error("Fail to creating a new room");
  }
}
