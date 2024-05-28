export default function List({ number, name, spec }) {
  return (
    <div className="flex w-full items-center space-x-4">
      <div className="w-[20px] rounded-full bg-[#1C1C1C] px-3 py-1 text-center text-white">
        {number}
      </div>
      <div className="flex w-full items-center justify-between space-x-36 pr-10">
        <span className="text-[#707070]">{name}</span>
        <span className="font-bold text-[#1C1C1C]">{spec}</span>
      </div>
    </div>
  );
}
