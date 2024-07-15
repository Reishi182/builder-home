export default function CustomSelect({
  options,
  label,
  register,
  defaultValue,
  name,
  ...props
}) {
  return (
    <div className="flex w-full flex-col space-y-3">
      {label && (
        <label className="text-2xl font-medium text-black">{label}</label>
      )}
      <div className="relative w-full">
        <select
          className="w-full rounded-xl border-1 border-[#9B9B9B] 
           px-6 py-6  text-xl text-black"
          {...props}
          {...register(name)}
          {...props}
          defaultValue={defaultValue}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
