"use client";
interface Reaction {
  id: string;
  emoji: string;
  x: number;
  y: number;
}

interface ReactionOverlayProps {
  reactions: Reaction[];
}
export default function ReactionOverlay({ reactions }: ReactionOverlayProps) {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {reactions.map((reaction) => (
        <div
          key={reaction.id}
          className="absolute text-4xl font-bold"
          style={{
            left: `${reaction.x}%`,
            top: `${reaction.y}%`,
            animation: "awesomeFloat 3s ease-out forwards",
            filter: "drop-shadow(0 0 20px rgba(255,255,255,0.5))",
          }}
        >
          {reaction.emoji}
        </div>
      ))}
      <style jsx>{`
        @keyframes awesomeFloat {
          0% {
            transform: translateY(0px) scale(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            transform: translateY(-20px) scale(1.3) rotate(15deg);
            opacity: 1;
          }
          30% {
            transform: translateY(-40px) scale(1) rotate(-10deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-120px) scale(0.8) rotate(25deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
