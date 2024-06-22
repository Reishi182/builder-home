import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import { menuItems } from "./../utils/data";
import MobileNav from "./MobileNav";
import UserAvatar from "./UserAvatar";
import ButtonLink from "./ButtonLink";
import { Spinner } from "@nextui-org/react";
import { useLogin } from "../features/Auth/useLogin";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const { isLoading, isAuthenticated } = useLogin();
  useEffect(() => {
    if (isDesktopOrLaptop) setIsOpen(false);
  }, [isDesktopOrLaptop, setIsOpen]);

  return (
    <nav className="relative flex justify-between px-10 py-7  text-[1.4rem] shadow-md">
      <div className="flex gap-[1rem]">
        <div className="flex items-center justify-center lg:hidden">
          <Hamburger size={20} toggled={isOpen} toggle={setIsOpen} />
        </div>

        <div className="flex items-center  gap-[5rem]">
          <Link to="/">
            <img src="/img/logo.png" className="h-[25px] w-[80px]" />
          </Link>
          <ul className="hidden flex-row space-x-14  text-[#9e9e9e] lg:flex  ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-[#5E8451]"
                      : "flex items-center font-medium transition-all"
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
      <div className="flex items-center justify-center space-x-9">
        {isLoading ? (
          <Spinner />
        ) : isAuthenticated ? (
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
