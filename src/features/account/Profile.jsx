import { Avatar, Tooltip } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { RiEditFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Profile() {
  const [data] = useLocalStorage("loginData", {});

  return (
    <div className="flex flex-col md:py-0 py-10 sm:px-20  w-full space-y-14 ">
      <h1 className="text-3xl text-[#C0702E] font-bold">My Profile</h1>
      <div className="flex w-full bg-gradient-to-b py-10 space-y-5  px-10 from-[#e9fad2ee] flex-col to-[#95b26fc5]  rounded-3xl ">
        <div className="flex justify-end">
          <Tooltip showArrow={true} content="Edit Profile" color="default">
            <Link to="edit" className="text-[2rem]">
              <RiEditFill color="black" />
            </Link>
          </Tooltip>
        </div>
        <div className="space-y-11 flex h-full flex-col">
          <div className="bg-[#F2F4F6] w-full  pb-20  rounded-3xl flex items-center space-y-4 py-5 flex-col ">
            <Avatar
              name={data.name}
              className="w-36 h-36 text-large"
              isBordered
              color="default"
            />
            <span className="block text-[1.5rem] font-semibold">
              {data.name}
            </span>
            <span className="block text-[1.3rem]">Pencari Jasa Arsitek</span>
          </div>
          <div className="bg-[#F2F4F6] w-full space-y-4 rounded-3xl px-10 py-10">
            <div className="text-[1.3rem]  min-[396px]:flex-row flex flex-col w-full justify-between min-[396px]:items-center items-start min font-semibold">
              <span className="block">Telephone</span>
              <span className="block font-normal">0812-6638-3379</span>
            </div>
            <div className="text-[1.3rem]  h-auto  min-[396px]:flex-row flex flex-col w-full justify-between min-[396px]:items-center items-start min font-semibold">
              <span className="block">Email</span>
              <span className="block font-normal">{data.email}</span>
            </div>
            <div className="text-[1.3rem]  h-auto  min-[396px]:flex-row flex flex-col w-full justify-between min-[396px]:items-center items-start min font-semibold">
              <span className="block">Gender</span>
              <span className="block font-normal">Male</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
