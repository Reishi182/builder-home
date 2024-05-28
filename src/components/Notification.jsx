import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
} from "@nextui-org/react";
import NoNotification from "./NoNotification";
import { notifications } from "../utils/data";
export default function Notification({ isOpen, setIsOpen, children }) {
  return (
    <AnimatePresence>
      <Popover
        placement="bottom"
        offset={20}
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        showArrow
      >
        <PopoverTrigger>{children}</PopoverTrigger>

        <PopoverContent className="w-[40rem]">
          <div className="px-6 py-6 flex border-b-2 justify-between items-center  border-gray-200 w-full">
            <span className="text-3xl block font-bold">Notifications</span>
            <div className="flex space-x-5 items-center justify-center">
              {notifications.length ? (
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

          <ul className="overflow-auto h-[30rem] w-full px-8 relative  rounded-xl flex flex-col ">
            {notifications.length ? (
              notifications.map((item, i) => (
                <>
                  <motion.li
                    key={i}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="text-black py-6  flex items-center space-x-4 "
                  >
                    <img src={item.avatar} className="w-20 h-20 rounded-xl" />
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
              <NoNotification />
            )}
          </ul>
        </PopoverContent>
      </Popover>
    </AnimatePresence>
  );
}
