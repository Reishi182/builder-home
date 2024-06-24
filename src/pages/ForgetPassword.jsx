import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Modal from "../components/Modal";

import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import HzLayout from "../components/HzLayout";
import { Spinner, useDisclosure } from "@nextui-org/react";
import { IoSendSharp } from "react-icons/io5";
import { useForgetPassword } from "../features/Auth/useForgetPassword";
import { useLogin } from "./../features/Auth/useLogin";
import { useEffect } from "react";
export default function ForgetPassword() {
  const navigate = useNavigate();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { isAuthenticated } = useLogin();
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const { forgetPassword, isLoading } = useForgetPassword();
  function onSubmit(data) {
    if (!data) return;
    forgetPassword(
      { email: data.email },
      {
        onSuccess: () => {
          onOpen();
        },
      },
    );
  }

  return (
    <>
      <div className="flex h-screen px-12 py-6">
        <div className="mx-auto flex w-full items-center md:items-start">
          <HzLayout />
          <div className="flex h-full w-full flex-col items-center justify-center pl-0  pr-0 md:w-[50%] md:pl-40 md:pr-10">
            <div className="flex w-full flex-col items-center  justify-center space-y-6">
              <div className="w-full space-y-8 text-center md:text-start">
                <button
                  onClick={() => navigate("/login")}
                  className="-mb-5 flex items-center gap-3 text-2xl text-[#9B9B9B] underline "
                >
                  <FaArrowLeftLong />
                  Kembali ke halaman Login
                </button>

                <h1 className="text-2xl">
                  <span className="block">Oops!</span>
                </h1>
                <h1 className="space-y-3">
                  <span className="block text-3xl font-bold">
                    Reset Password
                  </span>
                  <span className="block text-xl text-[#7C7C7C]">
                    Masukkan Alamat email kamu
                  </span>
                </h1>
              </div>
              <div className="w-full space-y-5">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <Input
                    label="Email"
                    placeholder="Email Kamu"
                    register={register("email", {
                      required: "Email wajib diisi",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Format email tidak valid",
                      },
                    })}
                    error={errors.email}
                  />

                  <button
                    disabled={isLoading || !isValid}
                    className={` ${
                      !isValid
                        ? "bg-[#D3D3D3] text-[#2A8728]"
                        : "bg-[#248043] text-white"
                    } w-full rounded-xl px-5  py-5 text-2xl`}
                  >
                    {isLoading ? <Spinner /> : "Confirm"}
                  </button>
                </form>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="flex justify-center space-x-5 text-xl">
                    <span className="text-[#7D7D7D]">Ingat akun kamu?</span>
                    <Link to="/login" className="font-bold text-[#164520]">
                      Sign In
                    </Link>
                  </h1>
                </div>
              </div>
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
        Link Reset Password Telah dikirim ke Gmail Anda
      </Modal>
    </>
  );
}
