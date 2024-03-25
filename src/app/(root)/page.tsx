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
import { Heading3 } from "@/components/heading3";
import { getRooms } from "@/lib/data-access/rooms";
import Link from "next/link";
import { GithubRepoLink } from "../_components/github-repo-link";
import TagList from "../_components/tag-list";

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
    <Card className="shadow flex justify-between items-start flex-col">
      <CardHeader>
        <CardTitle className="leading-8 text-xl">{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <TagList tags={room.tags} />
        {room.githubRepo && <GithubRepoLink link={room.githubRepo} />}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
