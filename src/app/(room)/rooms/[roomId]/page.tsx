import { NotFound } from "@/components/not-found";
import { getRoom } from "@/lib/data-access/rooms";
import TagList from "@/app/_components/tag-list";
import { GithubRepoLink } from "@/app/_components/github-repo-link";
import DevFinderVideo from "@/app/(room)/_components/video-player";

type Props = {
  params: { roomId: string };
};

export default async function RoomPage({ params }: Props) {
  const room = await getRoom(params.roomId);
  if (!room) return <NotFound text="No room found on this ID" />;

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 p-4 pr-2">
        <div className="drop-shadow-lg border rounded p-4">
          <DevFinderVideo roomId={room.id} />
        </div>
      </div>
      <div className="p-4 pl-2">
        <div className="drop-shadow-lg border rounded p-4 flex gap-4 flex-col">
          <h1 className="paragraph-semibold">{room?.name!}</h1>
          <p className="text-base text-zinc-400">{room?.description!}</p>
          <TagList tags={room.tags} />
          {room.githubRepo && (
            <GithubRepoLink link={room.githubRepo} className="self-center" />
          )}
        </div>
      </div>
    </div>
  );
}
