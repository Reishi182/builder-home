import { FaHeart, FaRegBell } from "react-icons/fa";
import { Avatar, Popover } from "@nextui-org/react";
import useLocalStorage from "../hooks/useLocalStorage";
import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import Notification from "./Notification";

export default function UserAvatar() {
  const [data] = useLocalStorage("loginData", {});
  const [isOpen, setIsOpen] = useState(false);
  const notifications = [];

  return (
    <>
      <div className="flex flex-row space-x-4 justify-center items-center">
        <span className="block text-[1.5rem] bg-[#F7F4F4] rounded-full p-4  ">
          <FaHeart color="grey" />
        </span>
        <Notification
          notifications={notifications}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <button className="block text-[2rem] bg-[#F7F4F4] rounded-full p-3  ">
            <FaRegBell color="grey" />
          </button>
        </Notification>
        <DropdownMenu data={data}>
          <Avatar name="joe" size="lg" as="button" />
        </DropdownMenu>
        <h1 className="text-[#404040] font-semibold">
          <span className="block">Halo,</span>
          <span className="block">{data.name}</span>
        </h1>
      </div>
    </>
  );
}
