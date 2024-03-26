"use client";

import {
  CallControls,
  CallingState,
  // ParticipantView,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import config from "@/config";
import { useSession } from "next-auth/react";

type VideoProps = {
  roomId: string;
  token: string;
};

const DevFinderVideo = ({ roomId, token }: VideoProps) => {
  const session = useSession();

  if (!roomId || !session.data) return;
  const client = new StreamVideoClient({
    apiKey: config.NEXT_PUBLIC_GET_STREAM_API_KEY,
    user: {
      id: session.data.user.id,
      name: session.data.user.name ?? undefined,
      image: session.data.user.image ?? undefined,
    },
    token,
  });
  const call = client.call("default", roomId);
  call.join({ create: true });

  if (!client || !call) return <h1>client and call is not define</h1>;
  // const { useCallCallingState } = useCallStateHooks();
  // const callingState = useCallCallingState();
  // if (callingState !== CallingState.JOINED) return <h1>Loading.....</h1>;

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <StreamTheme>
          <SpeakerLayout participantsBarPosition="bottom" />
          <CallControls />
        </StreamTheme>
      </StreamCall>
    </StreamVideo>
  );
};
export default DevFinderVideo;
