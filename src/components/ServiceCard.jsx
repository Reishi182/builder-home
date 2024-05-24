import { Outlet } from "react-router-dom";
import { BiSort } from "react-icons/bi";
import Input from "./Input";
import Tab from "./Tab";
import { useQuerySlice } from "./../slices/QuerySlice";

export default function ServiceCard() {
  const setQuery = useQuerySlice((state) => state.setQuery);
  const tabItems = [
    { name: "Arsitek", path: "arsitek" },
    { name: "Desain", path: "desain" },
    { name: "Desain/Proyek Kamu", path: "proyek" },
  ];

  return (
    <section className="px-28  py-20">
      <div className="space-y-9 flex flex-col  sm:items-start  items-center">
        <div>
          <h1 className="text-[#5E8451] text-[2rem] font-bold">
            Telusuri Pilihan Terbaik untuk Kamu !
          </h1>
        </div>
        <div className="flex w-full justify-between space-x-14">
          <Input
            py="py-3"
            placeholder="Cari Jasa"
            register={{ onChange: (e) => setQuery(e.target.value) }}
          />
          <button className="space-x-3  text-white text-xl  font-medium items-center justify-center flex bg-[#5E8451] rounded-xl  w-[10rem]">
            <span className="block">
              <BiSort />
            </span>
            <span className="block">Sort By</span>
          </button>
        </div>
        <div className="space-x-5 flex ">
          {tabItems.map((item) => (
            <Tab to={item.path} key={item.path}>
              {item.name}
            </Tab>
          ))}
        </div>
        <Outlet />
      </div>
    </section>
  );
}
