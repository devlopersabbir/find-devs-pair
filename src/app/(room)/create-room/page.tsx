import { Heading3 } from "@/components/heading3";
import CreateRoomForm from "../_components/create-room-form";

export default function page() {
  return (
    <div className="min-h-screen px-20 py-10">
      <div className="container-root">
        <Heading3 text="Create new room" className="mb-10" />
        <CreateRoomForm />
      </div>
    </div>
  );
}
