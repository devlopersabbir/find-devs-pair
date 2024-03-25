"use server";

import { db } from "@/db";
import { getSession } from "@/lib/auth";
import { createRoomSchema } from "@/lib/validation";
import { TRoom, room } from "@/schemas";
import { revalidatePath } from "next/cache";

export async function createRoomAction(
  inputs: Omit<TRoom, "id" | "userId">,
  pathname?: string
) {
  const { success } = createRoomSchema.safeParse(inputs);
  if (!success) throw new Error("Invalid inputs");

  const session = await getSession();
  if (!session) throw new Error("You must be logged in!");
  try {
    await db.insert(room).values({ ...inputs, userId: session.user.id });
    revalidatePath("/");
    return `(${inputs.name}) room is created🎉`;
  } catch (error) {
    throw new Error("Fail to creating a new room");
  }
}
