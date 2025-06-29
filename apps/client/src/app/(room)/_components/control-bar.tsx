import { LayoutMode } from "@/@types";
import VisualControl from "./meet-control/visual-control";
import ReactionControl from "./meet-control/reaction-control";
import EndCallButton from "./meet-control/end-call-button";
import LayoutControl from "./meet-control/layout-control";
import ChatUserControl from "./meet-control/chat-users-control";

interface ControlBarProps {
  isMicOn: boolean;
  setIsMicOn: (on: boolean) => void;
  isCameraOn: boolean;
  setIsCameraOn: (on: boolean) => void;
  isScreenSharing: boolean;
  setIsScreenSharing: (sharing: boolean) => void;
  layoutMode: LayoutMode;
  setLayoutMode: (mode: LayoutMode) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  isParticipantsOpen: boolean;
  setIsParticipantsOpen: (open: boolean) => void;
  onReaction: (emoji: string) => void;
  onLeaveMeeting?: () => void;
}

export default function ControlBar({
  isMicOn,
  setIsMicOn,
  isCameraOn,
  setIsCameraOn,
  isScreenSharing,
  setIsScreenSharing,
  layoutMode,
  setLayoutMode,
  isChatOpen,
  setIsChatOpen,
  isParticipantsOpen,
  setIsParticipantsOpen,
  onReaction,
  onLeaveMeeting,
}: ControlBarProps) {
  return (
    <div className="h-20 px-8 backdrop-blur-2xl bg-black/40 border-t border-white/20 shadow-2xl">
      <div className="h-full flex items-center justify-between">
        {/* Left controls */}
        <VisualControl />

        {/* Center - Awesome Reactions */}
        <ReactionControl onReaction={onReaction} />

        {/* Right controls */}
        <div className="flex items-center space-x-4">
          {/* Awesome Layout controls */}
          <LayoutControl />

          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-3"></div>

          <ChatUserControl />
          {/* Awesome End call button */}
          <EndCallButton />
        </div>
      </div>
    </div>
  );
}
