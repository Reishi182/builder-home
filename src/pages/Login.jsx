import HzLayout from "../components/HzLayout";
import { useNavigate } from "react-router-dom";
import LoginForm from "../features/Auth/LoginForm";
import { useEffect } from "react";
import { useLogin } from "../features/Auth/useLogin";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Login() {
  const { isAuthenticated } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex min-h-screen px-12 py-6">
      <div className="mx-auto flex w-full items-center md:items-start">
        <HzLayout />

        <div className="flex h-full w-full flex-col items-center justify-normal pl-0 pr-0  md:w-[50%] md:justify-center md:pl-40 md:pr-10">
          <div className="flex w-full flex-col items-center justify-center space-y-6">
            <div className="w-full space-y-5 text-center md:text-start">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-3 text-2xl text-[#9B9B9B] underline "
              >
                <FaArrowLeftLong />
                Kembali
              </button>
              <h1 className="text-2xl">
                <span className="block">Selamat Datang !</span>
              </h1>
              <h1 className="space-y-3">
                <span className="block text-3xl font-bold">Sign In</span>
                <span className="block text-xl text-[#7C7C7C]">
                  Silahkan masukkan email dan password kamu
                </span>
              </h1>
            </div>
            <div className="w-full space-y-5">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
