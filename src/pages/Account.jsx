import { Avatar } from "@nextui-org/react";
import { FaUserAlt } from "react-icons/fa";
import ProfileButton from "./../components/ProfileButton";
import { Outlet } from "react-router-dom";
import { BsCart4, BsFillHouseAddFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useCurrentUser } from "../features/Auth/useCurrentUser";
import Loading from "../components/Loading";

export default function Account() {
  const { user, isLoading } = useCurrentUser();

  const items = [
    { label: "Profile", icon: <FaUserAlt />, path: "profile" },
    {
      label: "My Project",
      icon: <BsFillHouseAddFill />,
      path: "my-project",
    },

    { label: "Transaction", icon: <BsCart4 />, path: "transaction" },
    { label: "Logout", icon: <FiLogOut />, path: "logout" },
  ];

  if (isLoading) return <Loading />;
  return (
    <section className=" ">
      <div className="flex h-auto flex-col py-0 pl-0 sm:flex-row sm:py-20 sm:pl-20  ">
        <div className="flex flex-row items-center justify-center space-x-10 space-y-0 rounded-2xl bg-[#F7F7F7]  px-10 py-16 sm:flex-col sm:justify-normal sm:space-y-14    md:space-x-0">
          <div className="flex flex-col items-center space-y-3">
            <Avatar src={user.avatar} className="h-36 w-36 text-large" />
            <span className="block text-[1.5rem] font-semibold">
              {user.username}
            </span>
          </div>
          <div className="overflow-x-auto whitespace-nowrap">
            <ul className="flex flex-row space-x-4 space-y-0 p-4 sm:flex-col sm:space-x-0 sm:space-y-5">
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
