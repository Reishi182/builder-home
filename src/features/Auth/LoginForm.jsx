import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useLogin } from "./useLogin";
import { Spinner } from "@nextui-org/react";

export default function LoginForm() {
  const [data, setData] = useLocalStorage("loginData", {});
  const checked = Boolean(data.email);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
    defaultValues: {
      email: data.email || "",
      password: data.password || "",
      rememberMe: checked,
    },
  });

  const { isLoading, login } = useLogin();

  function onSubmit({ rememberMe, email, password }) {
    if (rememberMe) {
      setData({ email, password });
    } else if (!rememberMe) {
      window.localStorage.clear();
    }
    login({ email, password });
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-4">
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
          label="Kata Sandi"
          type="password"
          placeholder="Password kamu"
          register={register("password", {
            required: "Password wajib diisi",
          })}
          error={errors.password}
        />
        <div className="flex items-center justify-between">
          <Checkbox label="Remember Me" register={register("rememberMe")} />
          <Link to="/reset_password" className="text-xl text-[#2083C6]">
            Lupa Password?
          </Link>
        </div>
        <button
          disabled={!isValid}
          type="submit"
          className={` ${
            !isValid ? "bg-[#D3D3D3] text-[#2A8728]" : "bg-[#248043] text-white"
          } w-full rounded-xl px-5  py-5 text-2xl`}
        >
          {isLoading ? <Spinner /> : "Sign In"}
        </button>
      </form>
      <div className="flex flex-col items-center justify-center">
        <h1 className="flex justify-center space-x-5 text-xl">
          <span className="text-[#7D7D7D]">Belum punya akun ?</span>
          <Link to="/register" className="font-bold text-[#164520]">
            Sign Up
          </Link>
        </h1>
      </div>
      <div className="flex items-center">
        <span className="flex-grow border-t-1 border-gray-500"></span>
        <span className="mx-4 block text-xl">Or</span>
        <span className="flex-grow border-t-1 border-gray-500"></span>
      </div>
      <button className="flex w-full items-center rounded-xl border-1 border-[#9B9B9B] px-5 py-4 text-2xl font-medium">
        <img src="/img/icon/google.png" className="w-10" alt="Google" />
        <span className="flex-1 text-center">Google</span>
      </button>
    </>
  );
}
