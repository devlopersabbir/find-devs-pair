"use client";

import { useState } from "react";
import { participants } from "@/constants";
import { LayoutMode } from "@/@types";
import UserCard from "./videos/users-card";
import UsersThumbnail from "./videos/users-thumbnail";

interface VideoGridProps {
  layoutMode: LayoutMode;
  isScreenSharing: boolean;
  currentUser?: string;
}

export default function VideoGrid({
  layoutMode,
  isScreenSharing,
  currentUser,
}: VideoGridProps) {
  const [pinnedParticipant, setPinnedParticipant] = useState<string | null>(
    null
  );

  const getGridCols = () => {
    if (layoutMode === "speaker" || isScreenSharing) return "grid-cols-1";
    const count = participants.length;
    if (count <= 2) return "grid-cols-1 md:grid-cols-2";
    if (count <= 4) return "grid-cols-2";
    if (count <= 6) return "grid-cols-2 md:grid-cols-3";
    return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  };

  return (
    <div className="h-full p-8">
      {isScreenSharing ? (
        <div className="h-full flex flex-col space-y-6">
          {/* Screen share area */}
          <div className="flex-1 rounded-3xl backdrop-blur-2xl bg-white/10 border border-white/20 p-10 flex items-center justify-center shadow-2xl">
            <div className="text-center text-white">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <span className="text-2xl font-bold">DS</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                David is presenting
              </h3>
              <p className="text-white/70">Screen sharing in progress</p>
            </div>
          </div>

          {/* Participant thumbnails */}
          <div className="flex space-x-4 overflow-x-auto pb-2">
            {participants.map((participant) => (
              <UsersThumbnail
                key={participant.id}
                participant={participant}
                isSmall
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={`grid ${getGridCols()} gap-6 h-full`}>
          {participants.map((participant) => (
            <UserCard
              key={participant.id}
              participant={participant}
              isPinned={pinnedParticipant === participant.id}
              onPin={() => setPinnedParticipant(participant.id)}
              layoutMode={layoutMode}
            />
          ))}
        </div>
      )}
    </div>
  );
}
