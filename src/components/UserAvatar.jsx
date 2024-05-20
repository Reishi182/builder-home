import { FaHeart, FaRegBell } from "react-icons/fa";
import { Avatar, Tooltip } from "@nextui-org/react";
import DropdownUser from "./DropdownUser";
import { useState } from "react";
import Notification from "./Notification";
import Wishlist from "./Wishlist";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function UserAvatar() {
  const [data] = useLocalStorage("loginData", {});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenWish, setIsOpenWish] = useState(false);

  return (
    <>
      <div className="flex flex-row space-x-4 justify-center items-center">
        <Wishlist isOpen={isOpenWish} setIsOpen={setIsOpenWish}>
          <button className="block text-[1.5rem] bg-[#F7F4F4] rounded-full p-4  ">
            <FaHeart color="red" />
          </button>
        </Wishlist>
        <Notification isOpen={isOpen} setIsOpen={setIsOpen}>
          <button className="block text-[2rem] bg-[#F7F4F4] rounded-full p-3  ">
            <FaRegBell color="grey" />
          </button>
        </Notification>
        <DropdownUser data={data}>
          <Avatar name="joe" size="lg" as="button" />
        </DropdownUser>
        <h1 className="text-[#404040] font-semibold">
          <span className="block">Halo,</span>
          <span className="block">{data.name}</span>
        </h1>
      </div>
    </>
  );
}
