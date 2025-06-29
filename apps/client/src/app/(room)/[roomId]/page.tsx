import MeetingRoom from "../_components/meeting-room";
export default async function Page({
  params,
}: {
  params: Promise<{ roomId: string }>;
}) {
  const { roomId } = await params;
  return <MeetingRoom roomId={roomId} />;
}
