"use client";

import "@stream-io/stream-chat-css/dist/css/index.css";
import {
  Call,
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import config from "@/config";
import { useSession } from "next-auth/react";
import { generateToken } from "@/app/(room)/rooms/action";
import { useRouter } from "next/navigation";

export default function DevFinderVideo({ roomId }: { roomId: string }) {
  const session = useSession();
  const router = useRouter();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  useEffect(() => {
    if (!roomId || !session.data) return;
    const client = new StreamVideoClient({
      apiKey: config.NEXT_PUBLIC_GET_STREAM_API_KEY,
      user: {
        id: session.data.user.id,
        name: session.data.user.name ?? undefined,
        image: session.data.user.image ?? undefined,
      },
      tokenProvider: () => generateToken(),
    });

    const call = client.call("default", roomId);
    call.join({ create: true });
    setClient(client);
    setCall(call);

    return () => {
      call
        .leave()
        .then(() => client.disconnectUser())
        .catch(console.error);
    };
  }, [session, roomId]);

  if (!client || !call) return;
  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <SpeakerLayout />
          <CallControls
            onLeave={() => {
              router.push("/");
            }}
          />
          {/* <CallParticipantsList onClose={() => undefined} /> */}
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
}
