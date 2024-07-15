import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import { useChangePassword } from "../Auth/useChangePassword";
import { Spinner } from "@nextui-org/react";
import { useAuthStore } from "../Auth/AuthSlice";

export default function ResetPassword() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { changePassword, isLoading } = useChangePassword();
  const { user } = useAuthStore((state) => state);
  const onSubmit = (data) => {
    changePassword({ id: user, data });
  };

  return (
    <div className="flex w-full flex-col items-center space-y-10 px-24 py-12">
      <h1 className="text-start text-[3rem] font-semibold">Reset Password</h1>

      <form
        className="w-full space-y-4 sm:w-[70%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          py="py-4"
          label="Old Password"
          type="password"
          register={register("oldPassword", {
            required: "Old Password is required",
          })}
          error={errors.oldPassword}
        />
        <Input
          py="py-4"
          label="New Password"
          type="password"
          register={register("password", {
            required: "New Password is required",
          })}
          error={errors.password}
        />
        <Input
          py="py-4"
          label="Password Confirmation"
          type="password"
          register={register("passwordConfirmation", {
            required: "Password Confirmation is required",
          })}
          error={errors.passwordConfirmation}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-xl bg-[#95B26F] px-4 py-4 text-2xl font-semibold text-white"
        >
          {isLoading ? <Spinner /> : "Simpan"}
        </button>
      </form>
    </div>
  );
}
