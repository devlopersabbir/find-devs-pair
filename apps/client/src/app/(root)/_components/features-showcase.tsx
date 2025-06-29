import { Shield, Sparkles, Video } from "lucide-react";

export default function FeaturesShowcase() {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-3">
          <Video className="w-6 h-6 text-blue-400" />
        </div>
        <div className="text-white/70 text-sm">HD Video</div>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3">
          <Shield className="w-6 h-6 text-emerald-400" />
        </div>
        <div className="text-white/70 text-sm">Secure</div>
      </div>
      <div className="text-center">
        <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-3">
          <Sparkles className="w-6 h-6 text-purple-400" />
        </div>
        <div className="text-white/70 text-sm">Premium</div>
      </div>
    </div>
  );
}
