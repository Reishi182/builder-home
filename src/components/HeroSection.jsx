import { FaHouse } from "react-icons/fa6";
import { HiFolderDownload } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import Badge from "../components/Badge";
import TabName from "../components/TabName";
import { useState } from "react";
import { useQuerySlice } from "../slices/QuerySlice";
import { useNavigate } from "react-router-dom";
export default function HeroSection() {
  const [search, setSearch] = useState("");
  const setQuery = useQuerySlice((state) => state.setQuery);
  const navigate = useNavigate();
  function handleSearch() {
    if (!search) return;
    setQuery(search);
    navigate("service/desain");
  }

  return (
    <section className="bg-[url(/img/bgHero.png)] bg-cover bg-center ">
      <div className="flex  ">
        <div className="z-0 flex w-full flex-col items-center px-10 py-16 sm:px-20 sm:py-24 lg:items-start ">
          <h1 className="text-wrap text-center text-[4.6rem] font-semibold text-[#5E8451] sm:text-[6rem] lg:text-start ">
            <span className="block">Temukan Desain</span>
            <span className="block">Rumah Impianmu!</span>
          </h1>
          <span className="block text-center text-[2.3rem] lg:text-start">
            Bangun rumah lebih mudah bersama Builder Home
          </span>
          <div className="mt-10 flex w-[40rem] items-center justify-center sm:w-full lg:justify-normal">
            <input
              className="w-[43rem] rounded-l-lg px-8 py-6 text-[1.5rem]"
              placeholder="Cari Desain Rumah"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <button
              className="rounded-r-lg bg-[#5E8451] px-8 py-[1.5rem]"
              onClick={handleSearch}
            >
              <IoSearchSharp color="white" size="2.3rem" />
            </button>
          </div>
          <h1 className="mt-6 flex  space-x-4">
            <span className="block text-2xl font-bold">Populer: </span>
            <Badge onClick={() => setSearch("Rumah Minimalis")}>
              Rumah Minimalis
            </Badge>
            <Badge onClick={() => setSearch("Rumah Tropis")}>
              Rumah Tropis
            </Badge>
          </h1>
          <div className="mt-16 flex w-[44rem] items-center justify-center space-x-7 rounded-xl bg-white px-10 py-12 sm:w-[55rem] ">
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
            className="block w-[100rem]"
            alt="rumah"
          />
        </figure>
      </div>
    </section>
  );
}
