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
        <h1 className="text-[#C0702E] text-[3rem] md:text-start text-center font-semibold">
          Desain
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 gap-14 place-items-center lg:grid-rows-4 sm:grid-cols-2 md:grid-cols-3   grid-cols-1 ">
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
