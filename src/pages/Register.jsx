import { useDisclosure } from "@nextui-org/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Modal from "../components/Modal";
import { IoSendSharp } from "react-icons/io5";

import HzLayout from "../components/HzLayout";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../features/Auth/RegisterForm";
import { useAuthStore } from "../features/Auth/AuthSlice";
import { useEffect } from "react";

export default function Register() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { auth } = useAuthStore((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    if (auth) navigate("/", { replace: true });
  }, [auth, navigate]);
  return (
    <div className="flex min-h-screen px-12 py-6">
      <div className="mx-auto flex w-full items-center md:items-start">
        <HzLayout />
        <div className="flex h-full w-full flex-col items-center justify-normal pl-0 pr-0  md:w-[50%] md:justify-center md:pl-40 md:pr-10">
          <div className="flex w-full flex-col items-center justify-center space-y-6">
            <div className="w-full space-y-8 text-center md:text-start">
              <button
                onClick={() => navigate("/")}
                className="-mb-5 flex items-center gap-3 text-2xl text-[#9B9B9B] underline "
              >
                <FaArrowLeftLong />
                Kembali
              </button>
              <h1 className="text-2xl">
                <span className="block">Selamat Datang !</span>
              </h1>
              <h1 className="space-y-3">
                <span className="block text-3xl font-bold">Sign Up</span>
                <span className="block text-xl text-[#7C7C7C]">
                  Silahkan masukkan email dan password kamu
                </span>
              </h1>
            </div>
            <div className="w-full space-y-5">
              <RegisterForm onOpen={onOpen} />
            </div>
          </div>
        </div>
      </div>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        icon={<IoSendSharp color="blue" />}
        title="Check Email kamu"
      >
        Silakan periksa email kamu untuk melanjutkan pendaftaran
      </Modal>
    </div>
  );
}
