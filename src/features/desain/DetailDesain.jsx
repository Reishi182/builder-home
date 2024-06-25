import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";
import Stars from "./../../components/Stars";
import ItemCarousel from "../../components/ItemCarousel";
import PageNotFound from "./../../pages/PageNotFound";
import Deskripsi from "./Deskripsi";
import DetailDeskripsi from "./DetailDeskripsi";
import Konsep from "./Konsep";
import Spesifikasi from "./Spesifikasi";
import { useProject } from "../project/useProject";
import { Spinner } from "@nextui-org/react";
export default function DetailDesain() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { project, isLoading } = useProject();
  const list = [
    { value: "konsep", label: "Konsep" },
    { value: "denah", label: "Denah" },
    { value: "spesifikasi", label: "Spesifikasi" },
  ];
  const currentTab = searchParams.get("tab") || list.at(0).value;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  if (!project) return <PageNotFound />;
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-6 bg-gradient-to-r from-[#e9fad2ee] to-[#95b26f5e] px-20 py-10 ">
        <div className="flex items-center justify-between ">
          <button
            onClick={() => navigate("/service/desain")}
            className="flex items-center space-x-2 text-xl font-semibold"
          >
            <FaArrowLeftLong /> <span className="block">Kembali</span>
          </button>
          <div className="space-x-6 text-white *:rounded-lg *:bg-[#5E8451] *:px-3 *:py-2">
            <button>Tambah Favorit</button>
            <button>Hubungi Kami </button>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{project.projectName}</h1>
          <h1 className="space-x-1 text-2xl font-medium">
            <span className="inline-block">Design by</span>
            <span className="inline-block font-semibold text-[#C0702E]">
              {project.username}
            </span>
          </h1>
          <div className="flex items-center space-x-4">
            <Stars totalStars={5} rating={project.rating || 0} />
          </div>
        </div>
      </div>
      <Deskripsi item={project} />
      <div className="space-y-6 px-20 py-10">
        <DetailDeskripsi />
        <div className="flex flex-col items-center justify-center  space-x-0 space-y-10 min-[550px]:flex-row min-[550px]:items-start min-[550px]:justify-between min-[550px]:space-x-20 min-[550px]:space-y-0 ">
          {currentTab === "konsep" || currentTab === "denah" ? (
            <Konsep />
          ) : (
            <Spesifikasi />
          )}
          <div className=" flex w-[25rem] flex-col   space-y-4  ">
            <h1 className="text-2xl font-semibold text-[#C0702E]">
              Keterangan Gambar{" "}
              {currentTab === "konsep" || currentTab === "spesifikasi"
                ? ""
                : "denah"}
            </h1>
            <div className="flex w-full  flex-col bg-[#F7F7F7]">
              <ItemCarousel responsive={responsive}>
                <img
                  src={
                    currentTab === "konsep" || currentTab === "spesifikasi"
                      ? project.image_cover
                      : "/img/denah.png"
                  }
                />
              </ItemCarousel>
              <h1 className="py-3 text-center font-semibold text-[#5E8451]">
                {currentTab === "konsep" && "Desain Ekstrerior"}
                {currentTab === "denah" && `Denah ${project.projectName}`}
                {currentTab === "spesifikasi" && "Spesifikasi Bahan Bangunan"}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
