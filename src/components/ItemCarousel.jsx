import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ItemCarousel({ children, responsive = {} }) {
  return (
    <Carousel
      responsive={responsive}
      containerClass="carousel-container"
      customTransition="transform 250ms ease 0s"
      customTransitionDuration={500}
      customTransitionTimingFunction="ease"
      partialVisible={true}
    >
      {children}
    </Carousel>
  );
}
