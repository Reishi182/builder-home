import { Link, Outlet } from "react-router-dom";
import Input from "./Input";
import { BiSort } from "react-icons/bi";
import Tab from "./Tab";

export default function ServiceCard() {
  const tabItems = [
    { name: "Arsitek", path: "arsitek" },
    { name: "Desain", path: "desain" },
    { name: "Desain/Proyek Kamu", path: "droyek" },
  ];
  return (
    <section className="px-28 py-20">
      <div className="space-y-9 flex flex-col">
        <div>
          <h1 className="text-[#5E8451] text-[2rem] font-bold">
            Telusuri Pilihan Terbaik untuk Kamu !
          </h1>
        </div>
        <div className="flex w-full justify-between space-x-14">
          <Input py="py-3" placeholder="Cari Jasa" />
          <button className="space-x-3  text-white text-xl  font-medium items-center justify-center flex bg-[#5E8451] rounded-xl  w-[100px]">
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
        <div>
          <Outlet />
        </div>
      </div>
    </section>
  );
}
