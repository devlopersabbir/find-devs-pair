"use client";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users } from "lucide-react";
import { useState } from "react";

export default function ChatUserControl() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsParticipantsOpen(!isParticipantsOpen)}
        className={`w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl ${
          isParticipantsOpen
            ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-blue-500/50"
            : "bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 shadow-white/20 backdrop-blur-sm"
        }`}
      >
        <Users className="w-6 h-6" />
      </Button>

      <Button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className={`w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl ${
          isChatOpen
            ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-blue-500/50"
            : "bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 shadow-white/20 backdrop-blur-sm"
        }`}
      >
        <MessageSquare className="w-6 h-6" />
      </Button>
    </>
  );
}
