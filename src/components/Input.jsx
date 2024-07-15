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
  min,
  defaultValue,
  max,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex w-full">
      <div className="w-full space-y-2">
        <label className="text-2xl font-medium text-black">{label}</label>
        <div className="relative">
          <input
            className={` px-6 ${py} border-[#9B9B9B] text-black ${
              error ? "border-red-500" : ""
            } w-full rounded-xl border-1 text-xl text-[#BFBFBF]`}
            type={showPassword ? "text" : type}
            maxLength={maxLength}
            placeholder={placeholder}
            min={min}
            max={max}
            defaultValue={defaultValue}
            onBlur={onBlur}
            {...register}
          />
          {type === "password" && (
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-3xl"
              onClick={togglePasswordVisibility}
              type="button"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          )}
        </div>
        {error && (
          <p className="text-lg italic text-red-500">{error.message}</p>
        )}
      </div>
    </div>
  );
}
