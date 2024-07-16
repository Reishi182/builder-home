import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Spinner,
} from "@nextui-org/react";
import NoWishlist from "./NoWishlist";
import { wishlists } from "../utils/data";
import WishlistItem from "./WishlistItem";
import { useWishlist } from "../features/wishlist/useWishlist";
import Loading from "./Loading";

export default function Wishlist({ isOpen, setIsOpen, children }) {
  const { wishlist, isLoading } = useWishlist();
  if (isLoading) return <Loading />;
  return (
    <AnimatePresence>
      <Popover
        placement="bottom"
        offset={20}
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        showArrow
      >
        <PopoverTrigger>{children}</PopoverTrigger>

        <PopoverContent className="w-[40rem]">
          <div className="flex w-full items-center justify-between border-b-2 border-gray-200  px-6 py-6">
            <span className="block text-3xl font-bold">Wishlists</span>
            <div className="flex items-center justify-center space-x-5">
              {wishlists.length ? (
                <span className="block  text-lg underline">Sudah dibaca</span>
              ) : null}
              <button
                onClick={() => setIsOpen((s) => !s)}
                className="text-[2rem]"
              >
                <IoCloseSharp color="#D9D9D9" />
              </button>
            </div>
          </div>
          {isLoading ? (
            <Spinner />
          ) : (
            <ul className="relative flex h-[30rem] w-full  flex-col space-y-2 overflow-auto rounded-xl px-4 py-2 ">
              {wishlist.wishlists.length > 0 ? (
                wishlist.wishlists.map((wish, i) => (
                  <WishlistItem key={i} item={wish} setIsOpen={setIsOpen} />
                ))
              ) : (
                <NoWishlist />
              )}
            </ul>
          )}
        </PopoverContent>
      </Popover>
    </AnimatePresence>
  );
}
