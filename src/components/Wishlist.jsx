import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
} from "@nextui-org/react";
import NoWishlist from "./NoWishlist";
import { wishlists } from "../utils/data";

export default function Wishlist({ isOpen, setIsOpen, children }) {
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
          <div className="px-6 py-6 flex border-b-2 justify-between items-center  border-gray-200 w-full">
            <span className="text-3xl block font-bold">Wishlists</span>
            <div className="flex space-x-5 items-center justify-center">
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

          <ul className="overflow-auto h-[30rem] w-full px-8 relative rounded-xl flex flex-col ">
            {wishlists.length ? (
              wishlists.map((item) => (
                <>
                  <motion.li
                    key={item.message}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="text-black py-6  flex items-center space-x-4 "
                  >
                    <img
                      src="/img/alisa.png"
                      className="w-20 h-20 rounded-xl"
                    />
                    <h1 className="space-y-3">
                      <span className="block text-2xl">{item.message}</span>
                      <span className="block text-lg text-[#898989]">
                        {item.timeAgo} minutes ago
                      </span>
                    </h1>
                  </motion.li>
                  <Divider />
                </>
              ))
            ) : (
              <NoWishlist setIsOpen={setIsOpen} />
            )}
          </ul>
        </PopoverContent>
      </Popover>
    </AnimatePresence>
  );
}
