"use client";
import { LayoutMode } from "@/@types";
import { Button } from "@/components/ui/button";
import { Grid3X3, User } from "lucide-react";
import { useState } from "react";

export default function LayoutControl() {
  const [layoutMode, setLayoutMode] = useState<LayoutMode>("grid");
  return (
    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-2xl rounded-full p-2 border border-white/20 shadow-xl">
      <Button
        onClick={() => setLayoutMode("grid")}
        variant="ghost"
        className={`w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
          layoutMode === "grid"
            ? "bg-gradient-to-r from-blue-500/50 to-purple-500/50 text-white shadow-2xl shadow-blue-500/30"
            : "text-white/70 hover:text-white hover:bg-white/20"
        }`}
      >
        <Grid3X3 className="w-5 h-5" />
      </Button>
      <Button
        onClick={() => setLayoutMode("speaker")}
        variant="ghost"
        className={`w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${
          layoutMode === "speaker"
            ? "bg-gradient-to-r from-blue-500/50 to-purple-500/50 text-white shadow-2xl shadow-blue-500/30"
            : "text-white/70 hover:text-white hover:bg-white/20"
        }`}
      >
        <User className="w-5 h-5" />
      </Button>
    </div>
  );
}
