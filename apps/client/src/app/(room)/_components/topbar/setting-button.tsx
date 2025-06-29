"use client";
import { Button } from "@/components/ui/button";
import { Settings, Sparkles } from "lucide-react";

type Props = {
  isSettingsOpen: boolean;
  setIsSettingsOpen: (open: boolean) => void;
};
export default function SettingButton({
  isSettingsOpen,
  setIsSettingsOpen,
}: Props) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setIsSettingsOpen(!isSettingsOpen)}
      className="text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-200 rounded-full px-4 py-2"
    >
      <Settings className="w-4 h-4 mr-2" />
      <Sparkles className="w-3 h-3" />
    </Button>
  );
}
