import { Avatar } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FaUser, FaUserAlt } from "react-icons/fa";
import ProfileButton from "../../components/ProfileButton";

export default function Profile() {
  const [data] = useLocalStorage("loginData", {});
  const items = [
    { label: "Profile", icon: <FaUserAlt /> },
    { label: "My Project", icon: <FaUserAlt /> },
    { label: "My Project", icon: <FaUserAlt /> },
    { label: "My Project", icon: <FaUserAlt /> },
    { label: "My Project", icon: <FaUserAlt /> },
  ];
  return (
    <section className=" px-20 py-20">
      <div className="flex">
        <div className="bg-[#F7F7F7] flex flex-col items-center justify-center py-16 space-y-14  w-[13vw] rounded-2xl">
          <div className="flex flex-col items-center justify-center space-y-3">
            <Avatar name={data.name} className="w-36 h-36 text-large" />
            <span className="block text-[1.5rem] font-semibold">
              {data.name}
            </span>
          </div>
          <div className="flex flex-col space-y-4">
            {items.map((item, i) => (
              <ProfileButton key={i} icon={item.icon}>
                {item.label}
              </ProfileButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
