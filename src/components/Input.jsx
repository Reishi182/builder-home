/* eslint-disable react/prop-types */
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
  return (
    <div className="flex w-full">
      <div className="space-y-2 w-full ">
        <label className="text-black text-2xl font-medium">{label}</label>
        <input
          className={` px-6 ${py} border-[#9B9B9B] text-black ${
            error ? "border-red-500" : ""
          } rounded-xl text-xl text-[#BFBFBF] w-full border-1`}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          onBlur={onBlur}
          {...register}
        />
           {error && <p className="text-red-500 text-lg italic">{error.message}</p>}
      </div>
   
    </div>
  );
}
