import ItemCard from "./../../components/ItemCard";
import { useQuerySlice } from "./../../slices/QuerySlice";
import NoItems from "./NoItems";
export default function Arsitek() {
  const filteredItems = useQuerySlice((state) => state.getItems());
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-[#C0702E] text-[3rem] md:text-start text-center font-semibold">
        Desain
      </h1>
      {filteredItems.length > 0 ? (
        <div className="grid lg:grid-cols-4 gap-14 place-items-center lg:grid-rows-4 sm:grid-cols-2 md:grid-cols-3   grid-cols-1 ">
          {filteredItems.map((item, index) => (
            <ItemCard
              title={item.title}
              key={index}
              img={item.img}
              designer={item.designer}
            />
          ))}
        </div>
      ) : (
        <NoItems />
      )}
    </div>
  );
}
