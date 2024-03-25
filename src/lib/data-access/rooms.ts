import { db } from "@/db";
import { room } from "@/schemas";
import { eq } from "drizzle-orm";
import { unstable_noStore } from "next/cache";
import { z } from "zod";

export async function getRooms() {
  unstable_noStore();
  const rooms = await db.query.room.findMany();
  return rooms;
}

// TODO: need to check the room id is valid or not
// if it's not valid then we should throw an error to the client
export async function getRoom(roomId: string) {
  return await db.query.room.findFirst({
    where: eq(room.id, roomId),
  });
}
