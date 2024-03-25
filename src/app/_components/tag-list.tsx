import { Badge } from "@/components/ui/badge";

const TagList = ({ tags }: { tags: string }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.split(", ").map((tag, i) => (
        <Badge key={i} className="text-sm w-fit cursor-pointer">
          {tag.trim()}
        </Badge>
      ))}
    </div>
  );
};
export default TagList;
