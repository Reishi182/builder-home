import { Avatar } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Input from "../../components/Input";

export default function PersonalInfo() {
  const [data] = useLocalStorage("loginData", {});
  return (
    <div className="flex flex-col py-12 px-24 w-full space-y-10 items-center">
      <h1 className="text-[3rem] font-semibold">Ubah Profil Pribadi</h1>
      <div className="flex items-center space-x-12">
        <Avatar
          name={data.name}
          className="w-36 h-36 text-large"
          isBordered
          color="default"
        />
        <div className="flex flex-col space-y-4">
          <button className="text-white px-5 py-3 text-lg font-semibold rounded-lg bg-[#95B26F]">
            Ganti Foto Profile
          </button>
          <button className="text-red-600 text-lg font-semibold">
            Hapus Foto Profile
          </button>
        </div>
      </div>
      <form className="sm:w-[70%] w-full space-y-4">
        <Input py="py-4" label="Your Name" />
        <div className="space-y-2 w-full">
          <label className="text-black text-2xl font-medium">Description</label>
          <textarea
            className=" px-6 py-8 border-[#9B9B9B] text-black 
             rounded-xl text-xl  w-full border-1"
          />
        </div>
        <Input py="py-4" label="Phone Number" />
        <Input py="py-4" label="Email" />
        <Input py="py-4" label="Gender" />
        <button
          type="submit"
          className="bg-[#95B26F] text-white font-semibold w-full py-4 px-4 text-2xl rounded-xl"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}
