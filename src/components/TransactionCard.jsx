import { formatCurrency } from "../utils/helpers";
import Stars from "./Stars";
export default function TransactionCard({
  title,
  designer,
  price,
  rating,
  onClick = () => {},
  img,
}) {
  return (
    <div className="flex w-full border-1 border-gray-100 bg-[#FCFCFC] px-14 py-8">
      <div className="flex w-full flex-col items-center justify-between min-[323px]:flex-row">
        <div className="flex flex-col space-x-0 min-[393px]:flex-row min-[393px]:space-x-10">
          <img src={img} className="w-56" />
          <div className="flex flex-col items-center py-3 min-[323px]:items-start">
            <h1 className="text-xl font-bold">{title}</h1>
            <h1 className="text-medium">design by {designer}</h1>
            <Stars rating={rating} totalStars={5} />
            <h1 className="text-medium font-semibold">
              {formatCurrency(price)}
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <button
            onClick={onClick}
            className="rounded-lg bg-[#e8afaf96] px-5 py-2.5 font-semibold text-[#F42C2C]"
          >
            Hapus Wishlist
          </button>
          <button
            onClick={onClick}
            className="rounded-lg bg-[#EEFFEE] px-5 py-2.5 font-semibold text-[#009500]"
          >
            Lanjut Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
}
