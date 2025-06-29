export default function RoomBackground() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/30 via-rose-500/30 to-orange-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
    </div>
  );
}
