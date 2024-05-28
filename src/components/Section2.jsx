import { FaLongArrowAltRight } from "react-icons/fa";
import { houseItems } from "../utils/data";
import ButtonLink from "./ButtonLink";
import ItemCard from "./ItemCard";
import ItemCarousel from "./ItemCarousel";

export default function Section2() {
  return (
    <section className="bg-[#F4F4F4] flex flex-col sm:px-20 px-5  py-10 sm:py-20">
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <h1 className="text-[4rem] font-semibold">Rekomendasi Desain</h1>
        <ButtonLink to="/service/desain">
          Lihat Semua
          <FaLongArrowAltRight />
        </ButtonLink>
      </div>
      <ItemCarousel>
        {houseItems.map((item, i) => (
          <ItemCard
            title={item.title}
            id={item.id}
            key={i}
            img={item.img}
            designer={item.designer}
          />
        ))}
      </ItemCarousel>
    </section>
  );
}
