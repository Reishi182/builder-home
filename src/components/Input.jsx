/* eslint-disable react/prop-types */
export default function Input({
  label,
  register,
  placeholder,
  type,
  error,
  maxLength,
  onBlur,
}) {
  return (
    <div>
      <div className="space-y-2">
        <label className="text-black text-2xl font-medium">{label}</label>
        <input
          className={` px-6 py-6 border-[#9B9B9B] text-black ${
            error ? "border-red-500" : ""
          } rounded-xl text-xl text-[#BFBFBF] w-full border-1`}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          onBlur={onBlur}
          {...register}
        />
      </div>
      {error && <p className="text-red-500 text-lg italic">{error.message}</p>}
    </div>
  );
}
