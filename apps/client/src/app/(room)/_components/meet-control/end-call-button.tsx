"use client";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function EndCallButton() {
  const onLeaveMeeting = () => {};
  return (
    <Button
      onClick={onLeaveMeeting}
      className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white ml-4 transition-all duration-300 hover:scale-110 shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 border border-red-400/50"
    >
      <Phone className="w-7 h-7 rotate-[135deg]" />
    </Button>
  );
}
