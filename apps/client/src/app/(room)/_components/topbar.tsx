"use client";
import { Button } from "@/components/ui/button";
import { Clock, Wifi, Info } from "lucide-react";
import SettingButton from "./topbar/setting-button";

interface TopBarProps {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
  roomData?: { roomId: string; userName: string };
}

export default function TopBar({
  isSettingsOpen,
  setIsSettingsOpen,
}: TopBarProps) {
  const roomData = {
    roomId: "20",
  };
  return (
    <div className="h-16 px-8 flex items-center justify-between backdrop-blur-2xl bg-white/10 border-b border-white/20 shadow-2xl">
      {/* Left side - Meeting info */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"></div>
              <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="text-white font-semibold text-lg">
              {roomData?.roomId ? `Room: ${roomData.roomId}` : "Team Standup"}
            </span>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30">
            <span className="text-emerald-300 text-sm font-medium">LIVE</span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-white text-sm font-medium">45:32</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Wifi className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-medium">HD</span>
          </div>
        </div>
      </div>

      {/* Right side - Actions */}
      <div className="flex items-center space-x-3">
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200 rounded-full px-4 py-2"
        >
          <Info className="w-4 h-4 mr-2 text-blue-400" />
          Details
        </Button>
        <SettingButton
          isSettingsOpen={isSettingsOpen}
          setIsSettingsOpen={setIsSettingsOpen}
        />
      </div>
    </div>
  );
}
