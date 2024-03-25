import { cn } from "@/lib/utils";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export const GithubRepoLink = ({
  link,
  className,
}: {
  link: string;
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={cn(
        "flex font-bold hover:underline text-center gap-2 text-sm",
        className
      )}
      target="_blank"
    >
      <GithubIcon />
      Github Project
    </Link>
  );
};
