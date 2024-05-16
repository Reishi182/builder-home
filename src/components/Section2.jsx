import { FaChevronCircleRight } from "react-icons/fa";
import { houseItems } from "../utils/data";
import ButtonLink from "./ButtonLink";
import ItemCard from "./ItemCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

export default function Section2() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const isPhone = useMediaQuery({ query: "(max-width: 468px)" });
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "17px",
    speed: 500,
    slidesToShow: isPhone ? 1 : isMobile ? 2 : isTabletOrMobile ? 3 : 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    initialSlide: "0",
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
        <Slider {...settings}>
          {houseItems.map((item) => (
            <ItemCard
              title={item.title}
              key={item.img}
              img={item.img}
              designer={item.designer}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}
