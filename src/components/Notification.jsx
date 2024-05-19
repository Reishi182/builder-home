import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Divider,
} from "@nextui-org/react";

export default function Notification({
  isOpen,
  notifications,
  setIsOpen,
  children,
}) {
  return (
    <AnimatePresence>
      <Popover
        placement="bottom"
        offset={20}
        classNames={{ content: [""] }}
        showArrow
      >
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent className="w-[40rem]">
          <div className="px-6 py-6 flex border-b-2 justify-between items-center  border-gray-200 w-full">
            <span className="text-3xl block font-bold">Notifications</span>
            <div className="flex space-x-5 items-center justify-center">
              <span className="block  text-lg underline">Sudah dibaca</span>
              <button onClick={(s) => setIsOpen(!s)} className="text-[2rem]">
                <IoCloseSharp color="#D9D9D9" />
              </button>
            </div>
          </div>

          <ul className="px-7 w-full h-full flex flex-col  ">
            {notifications.map((item) => (
              <>
                <motion.li
                  key={item.message}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
                  className="text-black py-6  flex items-center space-x-4 "
                >
                  <img src="/img/alisa.png" className="w-20 h-20 rounded-xl" />

                  <h1 className="space-y-3">
                    <span className="block text-2xl">{item.message}</span>
                    <span className="block text-lg text-[#898989]">
                      {item.time} minutes ago
                    </span>
                  </h1>
                </motion.li>
                <Divider />
              </>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </AnimatePresence>
  );
}
