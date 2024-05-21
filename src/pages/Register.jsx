import useLocalStorage from "../hooks/useLocalStorage";
import { Link, useNavigate } from "react-router-dom";
import { useDisclosure } from "@nextui-org/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import Checkbox from "../components/Checkbox";
import { IoSendSharp } from "react-icons/io5";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useAuthStore } from "../features/Auth/AuthSlice";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Modal from "../components/Modal";

export default function Register() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [data, setData] = useLocalStorage("loginData", {});
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { login } = useAuthStore((state) => state);
  const password = watch("password");

  function onSubmit(data) {
    setData({ email: data.email, password: data.password, name: data.name });
    onOpen();
    login(); // Set auth to true upon successful registration
  }

  return (
    <div className="flex px-12 py-6 min-h-screen">
      <div className="mx-auto w-full flex md:items-start items-center">
        <div className="bg-[url(/img/login.png)] bg-center bg-no-repeat bg-cover  w-[50%] h-full rounded-xl  px-10 py-60 hidden md:flex  ">
          <div className="uppercase tracking-wide -space-y-3 relative z-30">
            <h1 className="text-white text-[2rem] tracking-wide">
              <span className="block font-thin">Real Project</span>
            </h1>
            <h1 className="text-white text-[6rem] -space-y-14  font-bold tracking-wider">
              <span className="block">Builder </span>
              <span className="block">Home </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center h-full w-full md:w-[50%]  md:pl-40 pl-0 md:pr-10 pr-0">
          <div className="w-full space-y-6 flex items-center flex-col justify-center">
            <div className="space-y-8 w-full text-center md:text-start">
              <button
                onClick={() => navigate("/")}
                className="flex text-2xl items-center gap-3 underline -mb-5 text-[#9B9B9B] "
              >
                <FaArrowLeftLong />
                Kembali
              </button>
              <h1 className="text-2xl">
                <span className="block">Selamat Datang !</span>
              </h1>
              <h1 className="space-y-3">
                <span className="block text-3xl font-bold">Sign Up</span>
                <span className="block text-[#7C7C7C] text-xl">
                  Silahkan masukkan email dan password kamu
                </span>
              </h1>
            </div>
            <div className="space-y-5 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <Input
                  label="Email"
                  placeholder="Email Kamu"
                  register={register("email", {
                    required: "Email wajib diisi",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Format email tidak valid",
                    },
                  })}
                  error={errors.email}
                />
                <Input
                  label="Nama"
                  placeholder="Nama Kamu"
                  register={register("name", {
                    required: "Nama wajib diisi",
                  })}
                  error={errors.name}
                />
                <Input
                  label="Password"
                  placeholder="Password kamu"
                  register={register("password", {
                    required: "Password wajib diisi",
                  })}
                  error={errors.password}
                />
                <Input
                  label="Confirm Password"
                  placeholder="Tulis Kembali passwordmu"
                  register={register("confirmPassword", {
                    required: "Konfirmasi password wajib diisi",
                    validate: (value) =>
                      value === password ||
                      "Password dan konfirmasi password tidak sama",
                  })}
                  error={errors.confirmPassword}
                />
                <div>
                  <Checkbox
                    label="By signing up you agree to our Terms & Condition 
                    and Privacy Policy.*"
                    register={register("policy", {
                      required:
                        "Silakan centang kotak untuk menyetujui kebijakan kami sebelum melanjutkan",
                    })}
                  />
                </div>
                <button
                  disabled={!isValid}
                  type="submit"
                  className={` ${
                    !isValid
                      ? "bg-[#D3D3D3] text-[#2A8728]"
                      : "bg-[#248043] text-white"
                  } w-full py-5 px-5  rounded-xl text-2xl`}
                >
                  Sign In
                </button>
              </form>
              <div className="flex flex-col justify-center items-center">
                <h1 className="flex justify-center space-x-5 text-xl">
                  <span className="text-[#7D7D7D]">Sudah punya akun ?</span>
                  <Link to="/login" className="text-[#164520] font-bold">
                    Sign In
                  </Link>
                </h1>
              </div>
              <div className="flex items-center">
                <span className="flex-grow border-t-1 border-gray-500"></span>
                <span className="block text-xl mx-4">Or</span>
                <span className="flex-grow border-t-1 border-gray-500"></span>
              </div>
              <button className="py-4 px-5 w-full text-2xl flex items-center font-medium rounded-xl border-[#9B9B9B] border-1">
                <img src="/img/google.png" className="w-10" alt="Google" />
                <span className="flex-1 text-center">Google</span>
              </button>
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
