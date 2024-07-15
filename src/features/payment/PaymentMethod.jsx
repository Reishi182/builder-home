import { RiPencilFill } from "react-icons/ri";

export default function PaymentMethod() {
  return (
    <div className="mt-1 flex flex-col space-y-8 border-b-1.5 border-t-1.5 border-[#636262] px-8 py-10">
      <div className="flex items-center justify-between">
        <h1 className="w-[80%] space-y-3">
          <span className="block text-xl font-bold">Payment Method</span>
          <span className="block text-lg font-medium tracking-wide">
            Card : Virtual Account
          </span>
        </h1>
        <button className="flex size-10  items-center justify-center rounded-full bg-[#5E8451] text-center text-2xl">
          <RiPencilFill color="white" />
        </button>
      </div>
    </div>
  );
}
