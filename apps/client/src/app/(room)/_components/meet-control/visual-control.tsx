"use client";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Hand,
  Mic,
  MicOff,
  Monitor,
  MonitorOff,
  Video,
  VideoOff,
  Volume2,
} from "lucide-react";
import { useState } from "react";

export default function VisualControl() {
  const [isMicOn, setIsMicOn] = useState(true);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <Button
        onClick={() => setIsMicOn(!isMicOn)}
        className={`w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl ${
          isMicOn
            ? "bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 shadow-white/20 backdrop-blur-sm"
            : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/50 hover:shadow-red-500/70"
        }`}
      >
        {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
      </Button>

      <Button
        onClick={() => setIsCameraOn(!isCameraOn)}
        className={`w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl ${
          isCameraOn
            ? "bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 shadow-white/20 backdrop-blur-sm"
            : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-red-500/50 hover:shadow-red-500/70"
        }`}
      >
        {isCameraOn ? (
          <Video className="w-6 h-6" />
        ) : (
          <VideoOff className="w-6 h-6" />
        )}
      </Button>

      <Button
        onClick={() => setIsScreenSharing(!isScreenSharing)}
        className={`w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl ${
          isScreenSharing
            ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-blue-500/50 hover:shadow-blue-500/70"
            : "bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 shadow-white/20 backdrop-blur-sm"
        }`}
      >
        {isScreenSharing ? (
          <MonitorOff className="w-6 h-6" />
        ) : (
          <Monitor className="w-6 h-6" />
        )}
      </Button>

      {/* Additional awesome controls */}
      <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent mx-3"></div>

      <Button
        variant="ghost"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30 text-white border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-yellow-500/30 backdrop-blur-sm"
      >
        <Hand className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-purple-500/30 backdrop-blur-sm"
      >
        <Camera className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 hover:from-green-500/30 hover:to-emerald-500/30 text-white border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-green-500/30 backdrop-blur-sm"
      >
        <Volume2 className="w-6 h-6" />
      </Button>
    </div>
  );
}
