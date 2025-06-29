import QuickFrom from "./quick-form";

export default function QuickOptions() {
  return (
    <div className="mt-8">
      <div className="text-center mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className="text-white/50 text-sm font-medium">Quick Join</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <QuickFrom />
      </div>
    </div>
  );
}
