import BackgroundBlurry from "./_components/blurry/bg-blurry";
import MeshOverlay from "./_components/overlay/mesh-overlay";
import FloatingParticles from "./_components/blurry/floating-particles";
import { Video } from "lucide-react";
import JoiningFrom from "./_components/joining-form";
import QuickOptions from "./_components/quick-options/quick-options";
import FloatingElement from "./_components/blurry/floating-element";
import FeaturesShowcase from "./_components/features-showcase";

export default function Home() {
  return (
    <div className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Awesome blurry background */}
      <BackgroundBlurry />
      {/* Mesh overlay for extra depth */}
      <MeshOverlay />
      {/* Floating particles */}
      <FloatingParticles />

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo/Brand section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 shadow-2xl shadow-blue-500/50 mb-6">
              <Video className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
              FindDevsPair
            </h1>
            <p className="text-white/70 text-lg">
              Enjoy Unlimited Free Video Meeting
            </p>
          </div>

          {/* Join form */}
          <JoiningFrom />

          {/* Quick join options */}
          <QuickOptions />

          {/* Features showcase */}
          <FeaturesShowcase />
        </div>
      </div>

      <FloatingElement />
    </div>
  );
}
