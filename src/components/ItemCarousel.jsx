import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ItemCarousel({ children }) {
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
    <Carousel
      responsive={responsive}
      containerClass="carousel-container"
      customTransition="transform 250ms ease 0s"
      customTransitionDuration={500}
      customTransitionTimingFunction="ease"
      partialVisible={false}
    >
      {children}
    </Carousel>
  );
}
