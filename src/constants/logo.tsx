import { Code2 } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Logo = () => {
  return (
    <Link href="/" className="">
      <div className="flex-center gap-1">
        <Code2 size={35} />
        <h1 className="text-2xl font-black text-gray-700 text-center">
          <span className="text-gradient hover:text-gradient2 transition-all duration-300 ease-out">
            DevsPair
          </span>
        </h1>
      </div>
    </Link>
  );
};
