import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TRoom } from "@/schemas";
import { GithubIcon } from "lucide-react";
import { Heading3 } from "@/components/heading3";
import { getRooms } from "@/lib/data-access/rooms";
import Link from "next/link";

export default async function Home() {
  const rooms = await getRooms();
  return (
    <main className="min-h-screen p-16">
      <div className="container-root">
        <div className="flex-between">
          <Heading3 text="Find Devs Room" />
          <Button asChild>
            <Link href="/create-room"> Create Room</Link>
          </Button>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {rooms && rooms.map((room) => <RoomCard key={room.id} room={room} />)}
        </div>
      </div>
    </main>
  );
}

function RoomCard({ room }: { room: TRoom }) {
  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {room.githubRepo && (
          <Link
            href={room.githubRepo}
            className="flex font-bold hover:underline"
            target="_blank"
          >
            <GithubIcon className="mr-2" />
            Github Project
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
