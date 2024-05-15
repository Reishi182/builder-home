import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function Section5() {
  return (
    <section className="bg-white px-24 py-36 ">
      <div className="flex justify-between flex-col space-y-12 md:space-y-0 md:flex-row md:justify-center items-center">
        <div className="sm:space-y-28 space-y-6 flex flex-col md:flex-col sm:flex-row items-center md:items-start justify-between md:justify-center w-full">
          <h1>
            <span className="block text-[5rem] font-bold">
              Tips & Inspirasi
            </span>
            <span className="block text-[1.5rem] tracking-wider">
              Bahan bacaan Anda sebelum membangun rumah
            </span>
          </h1>
          <Link className="bg-[#5E8451] items-center text-xl  py-3 rounded-lg gap-6 px-4 flex w-52 font-medium text-white">
            Lihat Semua
            <span className="inline-block">
              <FaArrowCircleRight size={15} />
            </span>
          </Link>
        </div>
        <div>
          <ArticleCard />
        </div>
      </div>
    </section>
  );
}
