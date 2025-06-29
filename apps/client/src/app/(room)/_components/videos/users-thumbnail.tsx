import { Mic, MicOff } from "lucide-react";

type Props = {
  participant: any;
  isSmall?: boolean;
};

export default function UsersThumbnail({
  participant,
  isSmall = false,
}: Props) {
  return (
    <div
      className={`${isSmall ? "w-20 h-16" : "w-24 h-20"} rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 flex-shrink-0 shadow-xl`}
    >
      <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
        <span className="text-white text-xs font-bold">
          {participant.name
            .split(" ")
            .map((n: string) => n[0])
            .join("")}
        </span>
        <div className="absolute bottom-1 right-1">
          {participant.isMuted ? (
            <MicOff className="w-3 h-3 text-red-400" />
          ) : (
            <Mic className="w-3 h-3 text-emerald-400" />
          )}
        </div>
      </div>
    </div>
  );
}
