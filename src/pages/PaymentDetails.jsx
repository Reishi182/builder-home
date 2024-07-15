import { formatCurrency } from "../utils/helpers";

export default function PaymentDetails() {
  return (
    <div className="mt-1 flex flex-col space-y-8 border-b-1.5 border-[#636262] px-8 py-10">
      <div className="flex w-full flex-col space-y-3 font-medium ">
        <h1 className="text-xl font-bold">Payment Details</h1>
        <h1 className="flex w-full justify-between">
          <span className="block text-lg ">Product Subtotal</span>
          <span className="block text-lg font-medium tracking-wide">
            {formatCurrency(100000000)}{" "}
          </span>
        </h1>
        <h1 className="flex w-full justify-between ">
          <span className="block text-lg ">Biaya PPN 11,00 %</span>
          <span className="block text-lg font-medium tracking-wide">
            {formatCurrency(100000000 - 100000000 * 0.011)}{" "}
          </span>
        </h1>
        <h1 className="flex w-full justify-between text-xl font-bold ">
          <span className="block  ">Total Payment</span>
          <span className="block ">{formatCurrency(100000000)} </span>
        </h1>
      </div>
      <div className="flex  justify-end">
        <button className="rounded-lg bg-[#5E8451]   px-5 py-3 text-white">
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
}
