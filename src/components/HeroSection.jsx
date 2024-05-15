import { FaHouse } from "react-icons/fa6";
import { HiFolderDownload } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import Badge from "../components/Badge";
import TabName from "../components/TabName";
import { useState } from "react";
export default function HeroSection() {
  const [search, setSearch] = useState("");
  return (
    <section className="bg-[url(/img/bgHero.png)] bg-center bg-cover px-20 py-24 ">
      <div className="flex ">
        <div className=" w-full z-0 ">
          <h1 className="text-[#5E8451] text-[6rem] font-semibold text-wrap ">
            <span className="block">Temukan Desain</span>
            <span className="block">Rumah Impianmu!</span>
          </h1>
          <span className="text-[2.3rem] block">
            Bangun rumah lebih mudah bersama Builder Home
          </span>
          <div className="flex items-center mt-10">
            <input
              className="w-[43rem] py-6 px-8 rounded-l-lg text-[1.5rem]"
              placeholder="Cari Desain Rumah"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button className="py-[1.5rem] px-8 bg-[#5E8451] rounded-r-lg">
              <IoSearchSharp color="white" size="2.3rem" />
            </button>
          </div>
          <h1 className="mt-6 flex  space-x-4">
            <span className="text-2xl font-bold block">Populer: </span>
            <Badge onClick={() => setSearch("Rumah Minimalis")}>
              Rumah Minimalis
            </Badge>
            <Badge onClick={() => setSearch("Rumah Tropis")}>
              Rumah Tropis
            </Badge>
          </h1>
          <div className="bg-white flex mt-16 items-center justify-center px-10 space-x-7 py-12 w-[55rem] rounded-xl ">
            <TabName value={999} name="Koleksi Desain" icon={<FaHouse />} />
            <TabName
              value={1000}
              name="Desain diunduh"
              icon={<HiFolderDownload />}
            />
            <TabName
              value={10000}
              name="Pengunjung Aktif"
              icon={<MdPeopleAlt />}
            />
          </div>
        </div>
        <figure className="z-10 hidden lg:block">
          <img
            src="./img/heroImg1.png"
            className="w-[100rem] block"
            alt="rumah"
          />
        </figure>
      </div>
    </section>
  );
}
