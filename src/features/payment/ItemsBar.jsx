import CheckOutCard from "./CheckOutCard";

export default function ItemsBar() {
  const items = [
    {
      id: 1,
      title: "Korean Modern Indah",
      designer: "Indah NW",
      img: "/img/House/house1.png",
      rating: 5,
      price: 100000000,
      status: "success",
      date: "2023-03-15",
      type: "desain",
    },
  ];

  return (
    <div className="flex w-full flex-col space-y-8 border-b-1.5 border-[#636262] px-8 py-10">
      <div className="flex w-full items-center">
        <h1 className="relative w-full space-y-3">
          <span className="block text-xl font-bold">Items</span>
          <span className="absolute -top-5 left-16 flex size-7 items-center justify-center rounded-full  bg-[#E5EBFC] text-center text-xs  font-extrabold">
            {items.length}
          </span>
          <span className="block text-lg font-medium tracking-wide">
            {items.map((item, i) => (
              <CheckOutCard key={i} item={item} />
            ))}
          </span>
        </h1>
      </div>
    </div>
  );
}
