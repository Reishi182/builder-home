import { useDisclosure } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import DeleteModal from "./DeleteModal";

export default function ProfileButton({ icon, children, path }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  if (path === "logout")
    return (
      <>
        <button
          onClick={() => onOpen()}
          className="py-4 px-10 w-[14rem] rounded-3xl text-black bg-[#ECDEF5] hover:text-white hover:bg-[#5E8451]  flex items-center space-x-5"
        >
          <span className="block text-xl active:text-white">{icon}</span>
          <span className="inline-block text-lg active:text-white font-bold">
            {children}
          </span>
        </button>
        <DeleteModal isOpen={isOpen} onClose={onClose} />
      </>
    );

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? "bg-[#5E8451] text-white py-4 px-10 rounded-3xl flex items-center space-x-5"
          : "py-4 px-10 rounded-3xl text-black bg-[#ECDEF5] hover:text-white hover:bg-[#5E8451]  flex items-center space-x-5"
      }
    >
      <span className="block text-xl active:text-white">{icon}</span>
      <span className="inline-block text-lg active:text-white font-bold">
        {children}
      </span>
    </NavLink>
  );
}
