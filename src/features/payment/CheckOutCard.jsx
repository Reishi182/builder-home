import { formatCurrency } from "../../utils/helpers";

export default function CheckOutCard({ item }) {
  const { title, designer, img, price } = item;

  return (
    <div className="mb-2 flex w-full py-8">
      <div className="flex w-full  ">
        <div className="flex w-full space-x-10">
          <img src={img} className="w-56 rounded-xl" />
          <div className="flex w-full flex-col items-start justify-normal min-[392px]:flex-row min-[392px]:items-center min-[392px]:justify-between ">
            <div className="flex-col space-y-2 py-3">
              <h1 className="text-xl font-bold">{title}</h1>
              <h1 className="text-medium">design by {designer}</h1>
              <h1 className="text-2xl ">Desain Rumah</h1>
            </div>
            <div>
              <h1 className="font-bold">{formatCurrency(price)}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
