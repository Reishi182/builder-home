import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "./../utils/data";
import { NavLink } from "react-router-dom/dist";

export default function MobileNav({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute flex bg-white items-center w-full left-0 md:top-[76px] top-[70px] z-20"
        >
          <ul className="space-y-8 px-20 py-10 w-full ">
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsOpen((s) => !s)}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#5E8451] font-semibold transition-all items-center"
                      : "font-medium  text-[#9e9e9e] transition-all items-center"
                  }
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
