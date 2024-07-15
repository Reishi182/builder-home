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
  py = "py-4",
  min,
  defaultValue,
  max,
}) {
  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full items-center justify-center">
        <div className="w-[14rem]">
          <label className="text-2xl font-medium text-black">{label}</label>
        </div>
        <div className="relative flex w-full flex-col">
          <input
            className={`px-6 ${py} border-[#9B9B9B] text-black ${
              error ? "border-red-500" : ""
            } w-full rounded-xl border-1 text-xl text-[#BFBFBF]`}
            type="text"
            maxLength={maxLength}
            placeholder={placeholder}
            min={min}
            max={max}
            defaultValue={defaultValue}
            onBlur={onBlur}
            {...register}
          />
          {error && (
            <p className="text-lg italic text-red-500">{error.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
