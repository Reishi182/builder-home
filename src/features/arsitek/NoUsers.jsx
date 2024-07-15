import { useQuerySlice } from "../../slices/QuerySlice";

export default function NoUsers() {
  const user = useQuerySlice((state) => state.query);
  return (
    <div className="flex w-full flex-col items-center justify-center ">
      <img src="/img/icon/notFound.png" className="w-[30rem]" />
      <h1 className="text-center text-[3rem] font-semibold text-[#C0702E]">
        {!user ? "Tidak ada Arsitek" : `Tidak Menemukan ${user}`}
      </h1>
    </div>
  );
}
