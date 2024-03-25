import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="min-h-screen p-16">
      <div className="container-root">
        <div className="flex-between">
          <h1 className="heading3">Find Devs Room</h1>
          <Button asChild>
            <Link href="/create-room"> Create Room</Link>
          </Button>
        </div>
        <h1>fuck</h1>
      </div>
    </main>
  );
}
