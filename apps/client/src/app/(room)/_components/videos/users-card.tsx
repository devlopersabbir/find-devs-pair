import { LayoutMode } from "@/@types";
import { Button } from "@/components/ui/button";
import {
  Mic,
  MicOff,
  MoreVertical,
  Pin,
  VideoOff,
  Volume2,
} from "lucide-react";
import { useState } from "react";

type Props = {
  participant: any;
  isPinned: boolean;
  onPin: () => void;
  layoutMode: LayoutMode;
};
export default function UserCard({
  participant,
  isPinned,
  onPin,
  layoutMode,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-white/10 border transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group ${
        isPinned
          ? "border-blue-400/60 ring-2 ring-blue-400/30 shadow-blue-500/30"
          : participant.isSpeaking
            ? "border-emerald-400/60 ring-2 ring-emerald-400/30 shadow-emerald-500/30"
            : "border-white/20 hover:border-white/40"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Awesome gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 rounded-3xl"></div>

      {/* Video/Avatar area */}
      <div className="aspect-video relative overflow-hidden">
        {participant.hasVideo ? (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex items-center justify-center relative">
            {/* Floating particles in video */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-2000"></div>
            </div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-2xl">
              <span className="text-white text-2xl font-bold">
                {participant.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-purple-500/50 border-2 border-white/20">
              <span className="text-white text-3xl font-bold">
                {participant.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
        )}

        {/* Awesome controls overlay */}
        {isHovered && (
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              size="sm"
              variant="ghost"
              onClick={onPin}
              className="w-10 h-10 p-0 bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200 rounded-full"
            >
              <Pin className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="w-10 h-10 p-0 bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200 rounded-full"
            >
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Awesome speaking indicator */}
        {participant.isSpeaking && (
          <div className="absolute top-4 left-4 flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm px-3 py-2 rounded-full border border-emerald-400/30">
            <Volume2 className="w-4 h-4 text-emerald-400" />
            <div className="flex space-x-1">
              <div className="w-1 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-4 bg-emerald-400 rounded-full animate-pulse delay-100"></div>
              <div className="w-1 h-2 bg-emerald-400 rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        )}
      </div>

      {/* Awesome participant info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <span className="text-white font-semibold text-sm truncate">
            {participant.name}
          </span>
          <div className="flex items-center space-x-2">
            {participant.isMuted ? (
              <div className="p-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm">
                <MicOff className="w-3.5 h-3.5 text-red-400" />
              </div>
            ) : (
              <div className="p-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm">
                <Mic className="w-3.5 h-3.5 text-emerald-400" />
              </div>
            )}
            {!participant.hasVideo && (
              <div className="p-2 rounded-full bg-red-500/20 border border-red-500/30 backdrop-blur-sm">
                <VideoOff className="w-3.5 h-3.5 text-red-400" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
