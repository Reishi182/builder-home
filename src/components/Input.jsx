import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Input({
  label,
  register,
  placeholder,
  type,
  error,
  maxLength,
  onBlur,
  py = "py-6",
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex w-full">
      <div className="space-y-2 w-full">
        <label className="text-black text-2xl font-medium">{label}</label>
        <div className="relative">
          <input
            className={` px-6 ${py} border-[#9B9B9B] text-black ${
              error ? "border-red-500" : ""
            } rounded-xl text-xl text-[#BFBFBF] w-full border-1`}
            type={showPassword ? "text" : type}
            maxLength={maxLength}
            placeholder={placeholder}
            onBlur={onBlur}
            {...register}
          />
          {type === "password" && (
            <button
              className="absolute inset-y-0 right-0 text-3xl flex items-center pr-3"
              onClick={togglePasswordVisibility}
              type="button"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          )}
        </div>
        {error && (
          <p className="text-red-500 text-lg italic">{error.message}</p>
        )}
      </div>
    </div>
  );
}
