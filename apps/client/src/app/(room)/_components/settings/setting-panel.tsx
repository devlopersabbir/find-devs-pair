"use client";

import { Button } from "@/components/ui/button";
import { X, Camera, Mic, Palette, Wifi } from "lucide-react";

interface SettingsPanelProps {
  onClose: () => void;
}

export default function SettingsPanel({ onClose }: SettingsPanelProps) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl mx-4 backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
        {/* Awesome Header */}
        <div className="p-8 border-b border-white/20 flex items-center justify-between bg-white/5">
          <h2 className="text-white text-2xl font-bold">Settings</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 w-10 h-10 p-0 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Awesome Content */}
        <div className="p-8 space-y-8 max-h-96 overflow-y-auto">
          {/* Audio settings */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
                <Mic className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">Audio</h3>
            </div>
            <div className="space-y-4 ml-16">
              <div>
                <label className="text-white/90 text-sm font-medium">
                  Microphone
                </label>
                <select className="w-full mt-2 p-3 rounded-2xl bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:border-white/40 transition-all duration-200">
                  <option>Default - MacBook Pro Microphone</option>
                  <option>External USB Microphone</option>
                </select>
              </div>
              <div>
                <label className="text-white/90 text-sm font-medium">
                  Speaker
                </label>
                <select className="w-full mt-2 p-3 rounded-2xl bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:border-white/40 transition-all duration-200">
                  <option>Default - MacBook Pro Speakers</option>
                  <option>AirPods Pro</option>
                </select>
              </div>
            </div>
          </div>

          {/* Video settings */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-purple-500/20 border border-purple-500/30">
                <Camera className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">Video</h3>
            </div>
            <div className="space-y-4 ml-16">
              <div>
                <label className="text-white/90 text-sm font-medium">
                  Camera
                </label>
                <select className="w-full mt-2 p-3 rounded-2xl bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:border-white/40 transition-all duration-200">
                  <option>FaceTime HD Camera</option>
                  <option>External Webcam</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm font-medium">
                  HD Video
                </span>
                <div className="w-14 h-8 bg-blue-500 rounded-full relative cursor-pointer shadow-xl">
                  <div className="w-6 h-6 bg-white rounded-full absolute top-1 right-1 transition-all shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Background effects */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                <Palette className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">
                Background Effects
              </h3>
            </div>
            <div className="ml-16 grid grid-cols-4 gap-3">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 cursor-pointer border-2 border-white/20 hover:border-white/40 transition-all duration-200 hover:scale-105 shadow-xl"></div>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 cursor-pointer border-2 border-transparent hover:border-white/40 transition-all duration-200 hover:scale-105 shadow-xl"></div>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 cursor-pointer border-2 border-transparent hover:border-white/40 transition-all duration-200 hover:scale-105 shadow-xl"></div>
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 cursor-pointer border-2 border-transparent hover:border-white/40 transition-all duration-200 hover:scale-105 shadow-xl"></div>
            </div>
          </div>

          {/* Network info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-cyan-500/20 border border-cyan-500/30">
                <Wifi className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">Network</h3>
            </div>
            <div className="ml-16 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Connection Quality</span>
                <span className="text-emerald-400 font-medium">Excellent</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Bandwidth</span>
                <span className="text-white font-medium">45.2 Mbps</span>
              </div>
            </div>
          </div>
        </div>

        {/* Awesome Footer */}
        <div className="p-8 border-t border-white/20 flex justify-end space-x-4 bg-white/5">
          <Button
            onClick={onClose}
            variant="ghost"
            className="text-white hover:bg-white/20 px-6 py-3 rounded-2xl transition-all duration-200"
          >
            Cancel
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl shadow-2xl shadow-blue-500/30 transition-all duration-200 hover:scale-105">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
