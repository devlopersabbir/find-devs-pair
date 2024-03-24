import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TRoom } from "@/schemas";
import { GithubIcon } from "lucide-react";
import { db } from "@/db";
import { Heading3 } from "@/components/heading3";

function RoomCard({ room }: { room: TRoom }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {room.githubRepo && (
          <Link href={room.githubRepo}>
            <GithubIcon className="mr-2" />
            Github Project
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <Button>Join Room</Button>
      </CardFooter>
    </Card>
  );
}

export default async function Home() {
  const rooms = await db.query.room.findMany();
  return (
    <main className="min-h-screen p-16">
      <div className="container-root">
        <div className="flex-between">
          <Heading3 text="Find Devs Room" />
          <Button asChild>
            <Link href="/create-room"> Create Room</Link>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {rooms && rooms.map((room) => <RoomCard key={room.id} room={room} />)}
        </div>
      </div>
    </main>
  );
}
