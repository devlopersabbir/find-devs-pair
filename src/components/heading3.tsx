import { cn } from "@/lib/utils";

export function Heading3({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <h1 className={cn("heading3", className)}>{text}</h1>;
}
export function Heading2({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <h1 className={cn("heading2", className)}>{text}</h1>;
}
export function Heading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return <h1 className={cn("heading", className)}>{text}</h1>;
}
