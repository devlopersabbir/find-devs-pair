import { Button } from "@/components/ui/button";
import { reactions } from "@/constants";

type Props = {
  onReaction: (emoji: string) => void;
};
export default function ReactionControl({ onReaction }: Props) {
  return (
    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-2xl rounded-full p-3 border border-white/20 shadow-2xl">
      {reactions.map((emoji, index) => (
        <Button
          key={emoji}
          onClick={() => onReaction(emoji)}
          variant="ghost"
          className="w-12 h-12 rounded-full hover:bg-white/20 text-2xl transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-xl"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {emoji}
        </Button>
      ))}
    </div>
  );
}
