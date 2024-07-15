import { Avatar, Tooltip } from "@nextui-org/react";
import Loading from "../../components/Loading";
import { RiEditFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../Auth/useCurrentUser";

export default function Profile() {
  const { user, isLoading } = useCurrentUser();
  if (isLoading) return <Loading />;
  return (
    <div className="flex w-full flex-col space-y-14 px-5 py-10 min-[292px]:pl-20 min-[292px]:pr-10 sm:py-0 sm:pl-20   sm:pr-10 ">
      <h1 className="text-3xl font-bold text-[#C0702E]">My Profile</h1>
      <div className="flex w-full flex-col space-y-5 rounded-3xl  bg-gradient-to-b from-[#e9fad2ee] to-[#95b26fc5] px-10  py-10 ">
        <div className="flex justify-end">
          <Tooltip showArrow={true} content="Edit Profile" color="default">
            <Link to="edit" className="text-[2rem]">
              <RiEditFill color="black" />
            </Link>
          </Tooltip>
        </div>
        <div className="flex h-full flex-col space-y-11">
          <div className="flex w-full  flex-col  items-center space-y-4 rounded-3xl bg-[#F2F4F6] py-5 pb-20 ">
            <Avatar
              src={user.avatar}
              className="h-36 w-36 text-large"
              isBordered
              color="default"
            />
            <span className="block text-[1.5rem] font-semibold">
              {user.username}
            </span>
            <span className="block text-[1.3rem]">
              {user.role === "Arsitek"
                ? "Seorang Arsitek"
                : "Pencari Jasa Arsitek"}
            </span>
          </div>
          <div className="w-full space-y-4 rounded-3xl bg-[#F2F4F6] px-10 py-10">
            <div className="flex  w-full flex-col items-start justify-between text-[1.3rem] font-semibold min-[396px]:flex-row  min-[396px]:items-center">
              <span className="block">Telephone</span>
              <span className="block font-normal">{user.phone || "-"}</span>
            </div>
            <div className="flex  h-auto  w-full flex-col items-start justify-between text-[1.3rem] font-semibold min-[396px]:flex-row min-[396px]:items-center">
              <span className="block">Email</span>
              <span className="block font-normal">{user.email}</span>
            </div>
            <div className="flex  h-auto  w-full flex-col items-start justify-between text-[1.3rem] font-semibold min-[396px]:flex-row  min-[396px]:items-center">
              <span className="block">Gender</span>
              <span className="block font-normal">{user.gender || "-"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
