export default function Input({ label, register, placeholder, type, error }) {
  return (
    <div className="space-y-4">
      <label className="text-black text-2xl font-medium">{label}</label>
      <input
        className={` px-6 py-6 border-[#9B9B9B] ${
          error ? "border-red-500" : ""
        } rounded-xl text-xl text-[#BFBFBF] w-full border-1`}
        type={type}
        placeholder={placeholder}
        {...register}
      />
      {error && <p className="text-red-500 text-lg italic">{error.message}</p>}
    </div>
  );
}
