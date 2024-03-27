"use client";

import {
  StreamVideoClient,
  User,
  CallControls,
  SpeakerLayout,
  StreamTheme,
  StreamCall,
  StreamVideo,
  Call,
} from "@stream-io/video-react-sdk";
import config from "@/config";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { NotFound } from "@/components/not-found";
import "./style.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";

type VideoProps = {
  roomId: string;
  token: string;
};

const DevFinderVideo = ({ roomId, token }: VideoProps) => {
  const session = useSession();
  if (!session.data) return;

  const user: User = {
    id: session.data.user?.id,
    name: session.data.user?.name!,
    image: session.data.user?.image!,
  };
  console.log("user: ", user);

  if (!roomId || !config.NEXT_PUBLIC_GET_STREAM_API_KEY)
    return <NotFound text="Unexpected Error" />;

  const [client] = useState<StreamVideoClient>(() => {
    return new StreamVideoClient({
      apiKey: config.NEXT_PUBLIC_GET_STREAM_API_KEY,
      user,
      token,
    });
  }); /** client state */
  const [call, setCall] = useState<Call | null>(null); /** call state */

  useEffect(() => {
    const call = client.call("default", roomId);
    call.join({
      create: true,
    });
    setCall(call);
  }, [roomId]);
  if (!call) return <NotFound text="Unexpected Error with call" />;
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
};
export default DevFinderVideo;
export const MyUILayout = () => {
  return (
    <StreamTheme>
      <SpeakerLayout participantsBarPosition="bottom" />
      <CallControls />
    </StreamTheme>
  );
};
