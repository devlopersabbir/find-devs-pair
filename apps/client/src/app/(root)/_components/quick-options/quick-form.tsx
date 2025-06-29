"use client";
import { Button } from "@/components/ui/button";
import { Shield, Users } from "lucide-react";
import { useState, useTransition } from "react";

export default function QuickFrom() {
  const [userName, setUserName] = useState("");
  const [isLoading, startTransition] = useTransition();

  const handleQuickJoin = (roomId: string) => {};

  return (
    <>
      <Button
        onClick={() => handleQuickJoin("demo-room-1")}
        disabled={!userName.trim() || isLoading}
        className="h-16 rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 cursor-pointer"
      >
        <div className="text-center cursor-pointer">
          <Users className="w-5 h-5 mx-auto mb-1 text-blue-400" />
          <div className="text-sm font-medium">Demo Room</div>
        </div>
      </Button>

      <Button
        onClick={() => handleQuickJoin("test-room-2")}
        disabled={!userName.trim() || isLoading}
        className="h-16 rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 cursor-pointer"
      >
        <div className="text-center cursor-pointer">
          <Shield className="w-5 h-5 mx-auto mb-1 text-emerald-400" />
          <div className="text-sm font-medium">Test Room</div>
        </div>
      </Button>
    </>
  );
}
