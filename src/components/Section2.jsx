import { FaChevronCircleRight } from "react-icons/fa";
import { houseItems } from "../utils/data";
import ButtonLink from "./ButtonLink";
import ItemCard from "./ItemCard";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
export default function Section2() {
  const isMobile = useMediaQuery({ query: "(max-width: 438px)" });

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1224 },
      items: 4,
    },
    laptop: {
      breakpoint: { max: 1224, min: 611 },
      items: 3,
    },

    tablet: {
      breakpoint: { max: 611, min: 438 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 438, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-[#F4F4F4] flex flex-col px-20 py-20">
      <div className="flex justify-between items-center flex-col sm:flex-row">
        <h1 className="text-[4rem] font-semibold">Rekomendasi Desain</h1>
        <ButtonLink to="/service">
          Lihat Semua
          <FaChevronCircleRight />
        </ButtonLink>
      </div>
      <div className="mt-10">
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          centerMode={isMobile}
        >
          {houseItems.map((item) => (
            <ItemCard
              title={item.title}
              key={item.img}
              img={item.img}
              designer={item.designer}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
