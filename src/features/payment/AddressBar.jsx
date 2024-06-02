import { useLocalStorage } from "@uidotdev/usehooks";
import { RiPencilFill } from "react-icons/ri";

export default function AddressBar() {
  const [data] = useLocalStorage("loginData", {});
  return (
    <div className="flex flex-col space-y-8 border-b-1.5 border-[#636262] px-8 pb-16">
      <div className="flex items-center justify-between">
        <h1 className="w-[80%] space-y-3">
          <span className="block text-xl font-bold">Home Address</span>
          <span className="block text-lg font-medium tracking-wide">
            {" "}
            Jl. RS. Fatmawati Raya, Pondok Labu, Kec. Cilandak, Kota Depok, Jawa
            Barat 12450
          </span>
        </h1>
        <button className="flex size-10  items-center justify-center rounded-full bg-[#5E8451] text-center text-2xl">
          <RiPencilFill color="white" />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="space-y-2">
          <span className="block text-xl font-bold">Contact Information</span>
          <h1 className="text-medium *:block *:font-medium  *:tracking-wide">
            <span>(+62)XXXXXXXXXXXX</span>
            <span> {data.email}</span>
          </h1>
        </h1>
        <button className=" flex size-10 items-center justify-center rounded-full bg-[#5E8451] text-center text-2xl">
          <RiPencilFill color="white" />
        </button>
      </div>
    </div>
  );
}
