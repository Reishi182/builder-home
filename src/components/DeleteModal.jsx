import {
  Modal as ModalApp,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";

export default function DeleteModal({ isOpen, onClose }) {
  return (
    <ModalApp
      size="2xl"
      backdrop="blur"
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
    >
      <ModalContent className="py-36 px-8">
        <ModalHeader className="flex flex-col space-y-3 items-center">
          <img src="/img/logout.png" className="w-[25rem]" />
          <span className="block text-[2rem] text-[#C0702E]">
            Keluar dari Akun Builder Home{" "}
          </span>
          <span className="block text-[1.2rem] font-bold">
            Kamu yakin mau keluar dari akun ini ?{" "}
          </span>
        </ModalHeader>
        <ModalBody className="flex items-center flex-row justify-between mt-5 text-white *:rounded-lg text-[1.2rem]">
          <button onClick={() => onClose()} className="py-4 px-14 bg-[#74916B]">
            No
          </button>
          <button className="px-14 py-4 bg-[#F42C2C]">Yes</button>
        </ModalBody>
      </ModalContent>
    </ModalApp>
  );
}
