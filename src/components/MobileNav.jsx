import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "./../utils/data";
import { Link } from "react-router-dom/dist";

export default function MobileNav({ isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute flex bg-white items-center w-full left-0 top-[9rem] z-20"
        >
          <ul className="space-y-8 px-20 py-10 w-full">
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  className="active:text-[#5E8451] text-[#9e9e9e] active:font-semibold  hover:border-b-2 hover:border-blue-700  flex transition-all items-center"
                  to={item.path}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
