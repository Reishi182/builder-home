import { FaHeart, FaRegBell } from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import DropdownUser from "./DropdownUser";
import { useState } from "react";
import Notification from "./Notification";
import Wishlist from "./Wishlist";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useCurrentUser } from "../features/Auth/useCurrentUser";

export default function UserAvatar() {
  const [data] = useLocalStorage("loginData", {});
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useCurrentUser();
  console.log(user);
  const [isOpenWish, setIsOpenWish] = useState(false);

  return (
    <>
      <div className="flex flex-row items-center justify-center space-x-4">
        <Wishlist isOpen={isOpenWish} setIsOpen={setIsOpenWish}>
          <button className="block rounded-full bg-[#F7F4F4] p-4 text-[1.5rem]  ">
            <FaHeart color="red" />
          </button>
        </Wishlist>
        <Notification isOpen={isOpen} setIsOpen={setIsOpen}>
          <button className="block rounded-full bg-[#F7F4F4] p-3 text-[2rem]  ">
            <FaRegBell color="grey" />
          </button>
        </Notification>
        <DropdownUser data={data}>
          <Avatar name={user?.username} size="lg" as="button" />
        </DropdownUser>
        <h1 className="font-semibold text-[#404040]">
          <span className="block">Halo,</span>
          <span className="block">{user?.username}</span>
        </h1>
      </div>
    </>
  );
}
