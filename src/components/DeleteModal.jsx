import {
  Modal as ModalApp,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import { useAuthStore } from "../features/Auth/AuthSlice";

export default function DeleteModal({ isOpen, onClose }) {
  const { logout } = useAuthStore((state) => state);

  return (
    <ModalApp
      size="2xl"
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
    >
      <ModalContent className="px-8 py-36">
        <ModalHeader className="flex flex-col items-center space-y-3">
          <img src="/img/logout.png" className="w-[25rem]" />
          <span className="block text-[2rem] text-[#C0702E]">
            Keluar dari Akun Builder Home{" "}
          </span>
          <span className="block text-[1.2rem] font-bold">
            Kamu yakin mau keluar dari akun ini ?{" "}
          </span>
        </ModalHeader>
        <ModalBody className="mt-5 flex flex-row items-center justify-between text-[1.2rem] text-white *:rounded-lg">
          <button onClick={() => onClose()} className="bg-[#74916B] px-14 py-4">
            No
          </button>
          <button onClick={() => logout()} className="bg-[#F42C2C] px-14 py-4">
            Yes
          </button>
        </ModalBody>
      </ModalContent>
    </ModalApp>
  );
}
