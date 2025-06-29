import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export default function StringsControl() {
  return (
    <Button
      variant="ghost"
      className="w-14 h-14 rounded-full bg-gradient-to-r from-gray-500/20 to-slate-500/20 hover:from-gray-500/30 hover:to-slate-500/30 text-white border border-gray-500/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-gray-500/30 backdrop-blur-sm"
    >
      <Settings className="w-6 h-6" />
    </Button>
  );
}
