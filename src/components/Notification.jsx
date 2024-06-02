import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
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
          <div className="flex w-full items-center justify-between border-b-2 border-gray-200  px-6 py-6">
            <span className="block text-3xl font-bold">Notifications</span>
            <div className="flex items-center justify-center space-x-5">
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

          <ul className="relative flex h-[30rem] w-full flex-col overflow-auto rounded-xl  px-8 ">
            {notifications.length ? (
              notifications.map((item, i) => (
                <motion.li
                  key={i}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="flex items-center space-x-4 border-b-1 border-gray-200 py-6 text-black "
                >
                  <img src={item.avatar} className="h-20 w-20 rounded-xl" />
                  <h1 className="space-y-3">
                    <span className="block text-2xl">{item.message}</span>
                    <span className="block text-lg text-[#898989]">
                      {item.timeAgo} minutes ago
                    </span>
                  </h1>
                </motion.li>
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
