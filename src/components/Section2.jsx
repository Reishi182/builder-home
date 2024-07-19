import { FaLongArrowAltRight } from "react-icons/fa";
import ButtonLink from "./ButtonLink";
import ItemCard from "./ItemCard";
import ItemCarousel from "./ItemCarousel";
import { useProjects } from "../features/project/useProjects";
import NoItems from "./../features/desain/NoItems";
import Loading from "./Loading";
export default function Section2() {
  const { projects, isLoading } = useProjects();
  if (isLoading) return <Loading />;

  if (!projects.length) return <NoItems />;
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
      breakpoint: { max: 611, min: 365 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 365, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="flex flex-col bg-[#F4F4F4] px-5 py-10  sm:px-20 sm:py-20">
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <h1 className="text-[4rem] font-semibold">Rekomendasi Desain</h1>
        <ButtonLink to="/service/desain">
          Lihat Semua
          <FaLongArrowAltRight />
        </ButtonLink>
      </div>
      {projects.length > 0 ? (
        <ItemCarousel responsive={responsive}>
          {projects.map((item, index) => (
            <ItemCard project={item} key={index} />
          ))}
        </ItemCarousel>
      ) : (
        <NoItems />
      )}
    </section>
  );
}
