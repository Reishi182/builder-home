import { FaHeart, FaRegBell } from "react-icons/fa";
import { Avatar, Spinner } from "@nextui-org/react";
import DropdownUser from "./DropdownUser";
import { useState } from "react";
import Notification from "./Notification";
import Wishlist from "./Wishlist";
import { useCurrentUser } from "../features/Auth/useCurrentUser";
import { useAuthStore } from "../features/Auth/AuthSlice";

export default function UserAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading, error } = useCurrentUser();
  const [isOpenWish, setIsOpenWish] = useState(false);
  const { logout } = useAuthStore((state) => state);
  if (error) return logout();
  if (isLoading) return <Spinner />;
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
        <DropdownUser>
          <Avatar src={user?.avatar || ""} size="lg" as="button" />
        </DropdownUser>
        <h1 className="font-semibold text-[#404040]">
          <span className="block">Halo,</span>
          <span className="block">{user?.username || ""}</span>
        </h1>
      </div>
    </>
  );
}
