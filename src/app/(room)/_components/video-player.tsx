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
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  useEffect(() => {
    if (!session.data || !roomId || !config.NEXT_PUBLIC_GET_STREAM_API_KEY)
      return; /** Do nothing if conditions are not met */

    const user: User = {
      id: session.data.user?.id,
      name: session.data.user?.name!,
      image: session.data.user?.image!,
    };
    const clnt = new StreamVideoClient({
      apiKey: config.NEXT_PUBLIC_GET_STREAM_API_KEY,
      user,
      token,
    });
    setClient(clnt);

    // Clean-up function
    return () => {
      clnt.disconnectUser();
    };
  }, [session, roomId, token]);

  useEffect(() => {
    if (!client || !roomId) return; /** Do nothing if conditions are not met */

    const newCall = client.call("default", roomId);
    newCall.join({
      create: true,
    });
    setCall(newCall);

    // Clean-up function
    return () => {
      newCall.endCall();
    };
  }, [client, roomId]);

  if (!session.data || !roomId || !config.NEXT_PUBLIC_GET_STREAM_API_KEY) {
    return <NotFound text="Unexpected Error" />;
  }

  if (!client || !call) {
    return <NotFound text="Unexpected Error with call" />;
  }
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
