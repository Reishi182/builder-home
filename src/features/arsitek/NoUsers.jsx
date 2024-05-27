import { useQuerySlice } from "../../slices/QuerySlice";

export default function NoUsers() {
  const user = useQuerySlice((state) => state.query);
  return (
    <div className="flex items-center justify-center w-full flex-col ">
      <img src="/img/icon/notFound.png" className="w-[30rem]" />
      <h1 className="font-semibold text-[3rem] text-center text-[#C0702E]">
        Cannot Find Architect {`'${user}'`}
      </h1>
    </div>
  );
}
