export default function TextArea({ label, register, placeholder }) {
  return (
    <div className="w-full space-y-2">
      <label className="text-2xl font-medium text-black">{label}</label>
      <textarea
        className=" w-full rounded-xl border-1 border-[#9B9B9B] 
      px-6 py-8  text-xl text-black"
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
}
