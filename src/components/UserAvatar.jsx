import { FaRegBell } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";

export default function UserAvatar() {
  return (
    <div className="p-8 flex flex-row gap-4 justify-center items-center">
      <span>
        <FaRegBell color="grey" />
      </span>
      <Avatar name="joe" />
      <h1 className="text-[#404040] text-small">
        <span className="block">Hello,</span>
        <span className="block">Joe</span>
      </h1>
    </div>
  );
}
