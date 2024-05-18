import { FaChevronCircleRight } from "react-icons/fa";
import { houseItems } from "../utils/data";
import ButtonLink from "./ButtonLink";
import ItemCard from "./ItemCard";
import ItemCarousel from "./ItemCarousel";

export default function Section2() {
  return (
    <section className="bg-[#F4F4F4] flex flex-col px-20 py-20">
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <h1 className="text-[4rem] font-semibold">Rekomendasi Desain</h1>
        <ButtonLink to="/service">
          Lihat Semua
          <FaChevronCircleRight />
        </ButtonLink>
      </div>
      <ItemCarousel>
        {houseItems.map((item) => (
          <ItemCard
            title={item.title}
            key={item.img}
            img={item.img}
            designer={item.designer}
          />
        ))}
      </ItemCarousel>
    </section>
  );
}
