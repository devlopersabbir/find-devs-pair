"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import { LogInIcon, LogOutIcon } from "lucide-react";
import Image from "next/image";
import { Logo } from "@/constants";

const AccountDropDown = () => {
  const session = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={session.data?.user.image ?? ""} />
          <AvatarFallback>{session.data?.user.name}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => signOut()}>
          <LogOutIcon className="mr-2" /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export function Header() {
  const session = useSession();
  const isLoggedIn = !!session.data;
  return (
    <header className="dark:bg-gray-900 py-4 bg-gray-50">
      <div className="container mx-auto flex-between">
        <Logo />
        <div className="flex gap-4">
          {isLoggedIn ? (
            <AccountDropDown />
          ) : (
            <Button onClick={() => signIn("github")}>Sign In</Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
