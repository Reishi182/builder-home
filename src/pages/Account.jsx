import { Avatar } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FaUserAlt } from "react-icons/fa";
import ProfileButton from "./../components/ProfileButton";
import { Outlet } from "react-router-dom";
import { BsCart4, BsFillHouseAddFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineForum } from "react-icons/md";

export default function Account() {
  const [data] = useLocalStorage("loginData", {});
  const items = [
    { label: "Profile", icon: <FaUserAlt />, path: "profile" },
    {
      label: "My Project",
      icon: <BsFillHouseAddFill />,
      path: "my-project",
    },
    {
      label: "Forum",
      icon: <MdOutlineForum />,
      path: "forum",
    },
    { label: "Transaction", icon: <BsCart4 />, path: "transaction" },
    { label: "Logout", icon: <FiLogOut />, path: "logout" },
  ];

  return (
    <section className=" sm:px-20 px-5 py-20">
      <div className="flex flex-col sm:flex-row">
        <div className="bg-[#F7F7F7] flex sm:flex-col flex-row justify-center sm:justify-normal items-center px-10  py-16 sm:space-y-14 space-y-0 space-x-10 md:space-x-0    rounded-2xl">
          <div className="flex flex-col items-center space-y-3">
            <Avatar name={data.name} className="w-36 h-36 text-large" />
            <span className="block text-[1.5rem] font-semibold">
              {data.name}
            </span>
          </div>
          <div className="overflow-x-auto whitespace-nowrap">
            <ul className="flex sm:flex-col flex-row sm:space-x-0 space-y-0 sm:space-y-5 space-x-4 p-4">
              {items.map((item, index) => (
                <li key={index} className="inline-block">
                  <ProfileButton icon={item.icon} path={item.path}>
                    {item.label}
                  </ProfileButton>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
}
