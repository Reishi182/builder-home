import { useForm } from "react-hook-form";
import Input from "../components/Input";

import HzLayout from "../components/HzLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPassword } from "../features/Auth/useResetPassword";
import { useEffect } from "react";
import { validateToken } from "../services/apiAuth";
import toast from "react-hot-toast";

export default function ForgetPasswordToken() {
  const navigate = useNavigate();
  const { token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    const checkToken = async () => {
      const result = await validateToken(token);
      if (result.status === "success") {
        return;
      } else {
        toast.error("Token is Invalid or exp");
        navigate("/reset_password");
      }
    };

    checkToken();
  }, [token, navigate]);
  const { resetPasswordUser } = useResetPassword();

  function onSubmit(data) {
    if (!data) return;
    resetPasswordUser({
      token,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation,
    });
  }

  return (
    <div className="flex h-screen px-12 py-6">
      <div className="mx-auto flex w-full items-center md:items-start">
        <HzLayout />
        <div className="flex h-full w-full flex-col items-center justify-center pl-0  pr-0 md:w-[50%] md:pl-40 md:pr-10">
          <div className="flex w-full flex-col items-center  justify-center space-y-6">
            <div className="w-full space-y-8 text-center md:text-start">
              <h1 className="space-y-3">
                <span className="block text-3xl font-bold">Reset Password</span>
              </h1>
            </div>
            <div className="w-full space-y-5">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <Input
                  label="New Password"
                  placeholder="Password"
                  type="password"
                  register={register("password", {
                    required: "Password wajib diisi",
                  })}
                  error={errors.password}
                />
                <Input
                  label="Password Confirmation"
                  placeholder="Password Confirmation"
                  type="password"
                  register={register("passwordConfirmation", {
                    required: "passwordConfirmation",
                  })}
                  error={errors.passwordConfirmation}
                />

                <button
                  disabled={!isValid}
                  className={` ${
                    !isValid
                      ? "bg-[#D3D3D3] text-[#2A8728]"
                      : "bg-[#248043] text-white"
                  } w-full rounded-xl px-5  py-5 text-2xl`}
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
