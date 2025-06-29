export default function FloatingElement() {
  return (
    <>
      {/* Awesome floating elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 right-32 w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse delay-1000 opacity-60"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse delay-2000 opacity-40"></div>
    </>
  );
}
