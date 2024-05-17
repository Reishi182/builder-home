export default function Checkbox({ label, register, checked }) {
  return (
    <div className="flex space-x-4 ">
      <input
        {...register}
        checked={checked}
        type="checkbox"
        className="border-2 border-[#667085] w-[1.5rem] "
      />
      <label className="text-[#747980] text-xl font-medium">{label}</label>
    </div>
  );
}
