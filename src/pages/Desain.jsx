import ItemCard from "../components/ItemCard";
import { houseItems } from "../utils/data";

export default function Arsitek() {
  const duplicatedItems = [...houseItems];
  while (duplicatedItems.length < 16) {
    duplicatedItems.push(...houseItems.slice(0, 16 - duplicatedItems.length));
  }

  return (
    <div>
      <div>
        <h1 className="text-[#C0702E] text-[2.5rem] font-semibold">Desain</h1>
      </div>
      <div className="grid lg:grid-cols-4 lg:grid-rows-4 sm:grid-cols-2 md:grid-cols-3  place-items-center   grid-cols-1 ">
        {duplicatedItems.map((item, index) => (
          <ItemCard
            title={item.title}
            key={index}
            img={item.img}
            designer={item.designer}
          />
        ))}
      </div>
    </div>
  );
}
