import { formatCurrency, formatTanggal } from "../utils/helpers";
import Stars from "./Stars";

export default function TransactionCard({
  onClick = () => {},
  handleDelete,
  item,
  handleNavigate,
}) {
  const { title, designer, price, rating, img, status, date } = item;

  return (
    <div className="flex w-full border-1 border-gray-100 bg-[#FCFCFC] px-14 py-8">
      <div className="flex w-full flex-col items-center justify-between min-[323px]:flex-row">
        <div className="flex flex-col space-x-0 min-[393px]:flex-row min-[393px]:space-x-10">
          <img src={img} className="w-56" />
          <div className="flex flex-col items-center space-y-2 py-3 min-[323px]:items-start">
            <h1 className="text-xl font-bold">{title}</h1>
            <h1 className="text-medium">design by {designer}</h1>
            <Stars rating={rating} totalStars={5} />
            <h1 className="text-medium font-semibold">
              {formatCurrency(price)}
            </h1>
            {status && (
              <h1 className="font-semibold">
                {status === "fail" ? "Pesanan di Batalkan" : ""}{" "}
                {formatTanggal(date)}
              </h1>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 min-[323px]:space-y-8">
          {!status && (
            <>
              <button
                onClick={handleDelete}
                className="rounded-lg bg-[#e8afaf96] px-5 py-2.5 font-semibold text-[#F42C2C]"
              >
                Hapus Wishlist
              </button>
              <button
                onClick={handleNavigate}
                className="rounded-lg bg-[#EEFFEE] px-5 py-2.5 font-semibold text-[#009500]"
              >
                Lanjut Pembayaran
              </button>
            </>
          )}
          {status === "fail" && (
            <span className="rounded-lg bg-[#FFFBEE] px-5 py-2.5 font-semibold text-[#C49716]">
              Pesanan Dibatalkan
            </span>
          )}
          {status === "success" && (
            <span className="rounded-lg bg-[#79b3e091] px-5 py-2.5 font-semibold text-[#056BB7]">
              Pembayaran Selesai
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
