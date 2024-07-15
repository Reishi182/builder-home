import {
  Modal as ModalApp,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";

export default function Modal({ isOpen, onClose, icon, title, children }) {
  return (
    <ModalApp
      size="2xl"
      backdrop="opaque"
      isOpen={isOpen}
      onClose={onClose}
      placement="center"
    >
      <ModalContent className="py-36 px-8">
        <ModalHeader className="flex flex-col space-y-9 items-center">
          <span className="block text-[5rem]">{icon}</span>
          <span className="block text-[1.5rem]">{title}</span>
        </ModalHeader>
        <ModalBody className="flex items-center text-[1.2rem]">
          {children}
        </ModalBody>
      </ModalContent>
    </ModalApp>
  );
}
