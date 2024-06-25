import { Outlet } from "react-router-dom";
import { BiSort } from "react-icons/bi";
import Loading from "./../components/Loading";
import Input from "./Input";
import Tab from "./Tab";
import { useQuerySlice } from "./../slices/QuerySlice";
import { useCurrentUser } from "../features/Auth/useCurrentUser";

export default function ServiceCard() {
  const { setQuery, query } = useQuerySlice((state) => state);
  const { user, isLoading } = useCurrentUser();

  let tabItems = [
    { name: "Arsitek", path: "arsitek" },
    { name: "Desain", path: "desain" },
  ];

  if (isLoading) return <Loading />;
  if (user && user.role === "Arsitek") {
    tabItems.push({ name: "Desain/Proyek Kamu", path: "proyek" });
  }

  return (
    <section className="px-10 py-16 sm:px-28 sm:py-20">
      <div className="flex flex-col items-center space-y-9 sm:items-start">
        <div>
          <h1 className="text-[2rem] font-bold text-[#5E8451]">
            Telusuri Pilihan Terbaik untuk Kamu !
          </h1>
        </div>
        <div className="flex w-full justify-between space-x-8 sm:space-x-14">
          <Input
            py="py-3"
            placeholder="Cari Jasa"
            defaultValue={query}
            register={{ onChange: (e) => setQuery(e.target.value) }}
          />
          <button className="flex w-[10rem] items-center justify-center space-x-3 rounded-xl bg-[#5E8451] text-xl font-medium text-white">
            <span className="block">
              <BiSort />
            </span>
            <span className="block">Sort By</span>
          </button>
        </div>
        <div className="flex space-x-5">
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
