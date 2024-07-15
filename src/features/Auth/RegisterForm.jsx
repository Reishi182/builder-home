import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import { useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import { Spinner } from "@nextui-org/react";
import CustomSelect from "../../components/CustomSelect";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const { isLoading, signup } = useRegister();
  function onSubmit({ username, email, password, passwordConfirmation, role }) {
    signup({
      username,
      email,
      password,
      passwordConfirmation,
      role,
    });
  }
  const options = [
    { value: "User", label: "User" },
    { value: "Arsitek", label: "Arsitek" },
  ];
  return (
    <>
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
          register={register("username", {
            required: "Nama wajib diisi",
          })}
          error={errors.name}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password kamu"
          register={register("password", {
            required: "Password wajib diisi",
          })}
          error={errors.password}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="Tulis Kembali passwordmu"
          register={register("passwordConfirmation", {
            required: "Konfirmasi password wajib diisi",
          })}
          error={errors.confirmPassword}
        />
        <CustomSelect
          options={options}
          label="Choose an option"
          register={register}
          name="role"
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
            !isValid ? "bg-[#D3D3D3] text-[#2A8728]" : "bg-[#248043] text-white"
          } w-full rounded-xl px-5  py-5 text-2xl`}
        >
          {isLoading ? <Spinner /> : "Sign In"}
        </button>
      </form>
      <div className="flex flex-col items-center justify-center">
        <h1 className="flex justify-center space-x-5 text-xl">
          <span className="text-[#7D7D7D]">Sudah punya akun ?</span>
          <Link to="/login" className="font-bold text-[#164520]">
            Sign In
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
