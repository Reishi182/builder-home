import { Avatar } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Input from "../../components/Input";

export default function ResetPassword() {
  const [data] = useLocalStorage("loginData", {});
  return (
    <div className="flex flex-col py-12 px-24 w-full space-y-10 items-center ">
      <h1 className="text-[3rem] font-semibold text-start">Reset Password</h1>

      <form className="sm:w-[70%] w-full space-y-4">
        <Input py="py-4" label="Old Password" type="password" />
        <Input py="py-4" label="New Password" type="password" />
        <Input py="py-4" label="Password Confirmation" type="password" />
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
