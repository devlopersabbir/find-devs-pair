import { NotFound } from "@/components/not-found";
import { getRoom } from "@/lib/data-access/rooms";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  params: { roomId: string };
};

export default async function RoomPage({ params }: Props) {
  const room = await getRoom(params.roomId);
  if (!room) return <NotFound text="No room found on this ID" />;
  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 p-4 pr-2">
        <div className="drop-shadow-lg border rounded p-4">video</div>
      </div>
      <div className="p-4 pl-2">
        <div className="drop-shadow-lg border rounded p-4 flex gap-4 flex-col">
          <h1 className="paragraph-semibold">{room?.name!}</h1>
          <p className="text-base text-zinc-400">{room?.description!}</p>
          <div className="flex flex-wrap">
            <Badge>{room.tags}</Badge>
          </div>

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
        </div>
      </div>
    </div>
  );
}
