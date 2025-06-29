"use client";
import ReactionOverlay from "./bottom/reaction-overlay";
import TopBar from "./topbar";
import RoomBackground from "./blurry/room-bg";
import RoomMesh from "./blurry/room-mesh";
import { useState } from "react";
import { LayoutMode, ReactionPosition } from "@/@types";
import ControlBar from "./control-bar";
import VideoGrid from "./video-grid";
import SettingsPanel from "./settings/setting-panel";

export default function Room({ roomId }: { roomId: string }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("grid");
  const [reactions, setReactions] = useState<Array<ReactionPosition>>([]);

  const onLeaveMeeting = () => {};
  const addReaction = (emoji: string) => {
    const newReaction = {
      id: Math.random().toString(36).substr(2, 9),
      emoji,
      x: Math.random() * 70 + 15,
      y: Math.random() * 50 + 25,
    };
    setReactions((prev) => [...prev, newReaction]);
    setTimeout(() => {
      setReactions((prev) => prev.filter((r) => r.id !== newReaction.id));
    }, 3000);
  };
  return (
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Awesome blurry background */}
      <RoomBackground />
      {/* Mesh overlay for extra depth */}
      <RoomMesh />

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col">
        <TopBar
          isSettingsOpen={isSettingsOpen}
          setIsSettingsOpen={setIsSettingsOpen}
          roomData={{
            roomId: "22",
            userName: "example person",
          }}
        />

        <div className="flex-1 flex relative">
          {/* Video area */}
          <div className="flex-1">
            <VideoGrid
              layoutMode={layoutMode}
              isScreenSharing={isScreenSharing}
              currentUser={"room name"}
            />
          </div>

          {/* Chat sidebar - overlay with awesome blur */}
          {/* {isChatOpen && (
            <div className="absolute top-0 right-0 h-full z-30 transform transition-all duration-300 ease-out">
              <ChatSidebar
                onClose={() => setIsChatOpen(false)}
                currentUser={roomData.userName}
              />
            </div>
          )} */}

          {/* Participants sidebar - overlay with awesome blur */}
          {/* {isParticipantsOpen && (
            <div className="absolute top-0 right-0 h-full z-30 transform transition-all duration-300 ease-out">
              <ParticipantsSidebar
                onClose={() => setIsParticipantsOpen(false)}
                currentUser={roomData.userName}
              />
            </div>
          )} */}
        </div>

        {/* Control bar */}
        <ControlBar
          isMicOn={isMicOn}
          setIsMicOn={setIsMicOn}
          isCameraOn={isCameraOn}
          setIsCameraOn={setIsCameraOn}
          isScreenSharing={isScreenSharing}
          setIsScreenSharing={setIsScreenSharing}
          layoutMode={layoutMode}
          setLayoutMode={setLayoutMode}
          isChatOpen={isChatOpen}
          setIsChatOpen={setIsChatOpen}
          isParticipantsOpen={isParticipantsOpen}
          setIsParticipantsOpen={setIsParticipantsOpen}
          onReaction={addReaction}
          onLeaveMeeting={onLeaveMeeting}
        />
      </div>

      {/* Awesome blurry backdrop when sidebars are open */}
      {/* {(isChatOpen || isParticipantsOpen) && (
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm z-20 transition-all duration-300"
          onClick={() => {
            setIsChatOpen(false);
            setIsParticipantsOpen(false);
          }}
        />
      )} */}

      {/* Settings panel */}
      {isSettingsOpen && (
        <SettingsPanel onClose={() => setIsSettingsOpen(false)} />
      )}

      {/* Reaction overlay */}
      <ReactionOverlay reactions={reactions} />
    </div>
  );
}
