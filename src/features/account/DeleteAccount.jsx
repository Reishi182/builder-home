import { useLocalStorage } from "@uidotdev/usehooks";
import { deleteUser } from "../../services/apiUser";
import { useAuthStore } from "../Auth/AuthSlice";

export default function DeleteAccount() {
  const { user, logout, setUser } = useAuthStore((state) => state);
  const [data, setData] = useLocalStorage("loginData", {});

  function deleteAccount() {
    deleteUser(user);
    logout();
    setUser("");
    setData({});
  }

  return (
    <div className="flex w-full flex-col items-center space-y-10 px-24 py-12">
      <div className="space-y-14">
        <div className=" flex flex-col items-center justify-center space-y-36">
          <h1 className="text-[3rem] font-bold">Delete Account</h1>
          <h1 className="text-center">
            <span className="block text-[1.4rem] font-semibold">
              You are going to delete your account
            </span>
            <span className="block text-[1rem] font-medium">
              You wan’t be able to restore your data{" "}
            </span>
          </h1>
        </div>
        <div className="space-x flex items-center justify-between text-white *:rounded-lg *:px-12 *:py-3">
          <button className=" bg-[#95B26F]">Cancel</button>
          <button onClick={deleteAccount} className=" bg-[#E30000]">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
