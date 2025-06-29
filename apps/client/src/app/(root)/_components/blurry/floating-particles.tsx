export default function FloatingParticles() {
  return (
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-cyan-400/20 rounded-full animate-pulse delay-3000"></div>
    </div>
  );
}
