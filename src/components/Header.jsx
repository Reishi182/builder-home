import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import { menuItems } from "./../utils/data";
import MobileNav from "./MobileNav";
import UserAvatar from "./UserAvatar";
import ButtonLink from "./ButtonLink";
import { useAuthStore } from "../features/Auth/AuthSlice";
import { Spinner } from "@nextui-org/react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const { auth, loading } = useAuthStore((state) => state);
  useEffect(() => {
    if (isDesktopOrLaptop) setIsOpen(false);
  }, [isDesktopOrLaptop, setIsOpen]);

  return (
    <nav className="flex px-10 py-7 relative justify-between  text-[1.4rem] shadow-md">
      <div className="flex gap-[1rem]">
        <div className="lg:hidden flex justify-center items-center">
          <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
        </div>

        <div className="flex gap-[5rem]  items-center">
          <Link to="/">
            <img src="/img/logo.png" className="h-[25px] w-[80px]" />
          </Link>
          <ul className="lg:flex hidden flex-row  space-x-14 text-[#9e9e9e]  ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#5E8451] font-semibold"
                      : "flex font-medium transition-all items-center"
                  }
                  to={item.path}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="space-x-9 flex justify-center items-center">
        {loading ? (
          <Spinner />
        ) : auth ? (
          <UserAvatar />
        ) : (
          <>
            <ButtonLink to="/register">Daftar</ButtonLink>
            <Link to="/login">Masuk</Link>
          </>
        )}
      </div>
    </nav>
  );
}
