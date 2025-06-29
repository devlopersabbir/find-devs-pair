"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Hash, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function JoiningFrom() {
  const router = useRouter();
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const [isCreating, startCreating] = useTransition();
  const [isJoining, startJoining] = useTransition();

  const handleJoin = () => {
    if (!roomId || !userName) return;
    startJoining(() => {});
  };
  const handleCreate = () => {
    if (!roomId || !userName) return;
    startCreating(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(router.push(`/${roomId}`));
        }, 3000);
      });
    });
  };
  return (
    <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
      <div className="space-y-6">
        {/* Room ID input */}
        <div className="space-y-3">
          <label className="text-white font-medium text-sm flex items-center space-x-2">
            <Hash className="w-4 h-4 text-blue-400" />
            <span>Room ID</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter room ID..."
              className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* User name input */}
        <div className="space-y-3">
          <label className="text-white font-medium text-sm flex items-center space-x-2">
            <User className="w-4 h-4 text-emerald-400" />
            <span>Your Name</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full p-4 rounded-2xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 outline-none transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Join & create button */}
        <div className="flex justify-center items-center w-full space-x-2">
          <Button
            onClick={handleCreate}
            disabled={!roomId.trim() || !userName.trim() || isCreating}
            className="flex py-7 rounded-2xl bg-gradient-to-r from-blue-600  to-cyan-800 hover:from-blue-600  hover:to-cyan-600 text-white font-semibold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
          >
            {isCreating ? (
              <div className="flex items-center">
                <div className=" border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Creating...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <span>Create Meeting</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </Button>
          <Button
            onClick={handleJoin}
            disabled={!roomId.trim() || !userName.trim() || isJoining}
            className="flex py-7 rounded-2xl bg-gradient-to-r from-blue-400  to-cyan-600 hover:from-blue-600  hover:to-cyan-600 text-white font-semibold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
          >
            {isJoining ? (
              <div className="flex items-center">
                <div className="border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Joining...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <span>Join Meeting</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
