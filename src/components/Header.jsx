import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import { menuItems } from "./../utils/data";
import MobileNav from "./MobileNav";
import UserAvatar from "./UserAvatar";
import ButtonLink from "./ButtonLink";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isLogin = false;
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  useEffect(() => {
    if (isDesktopOrLaptop) setIsOpen(false);
  }, [isDesktopOrLaptop, setIsOpen]);

  return (
    <nav className="flex px-[4.4rem]  py-[2rem] relative justify-between lg:py-[2.5rem] text-[1.4rem] shadow-md">
      <div className="flex gap-[1rem]">
        <div className="lg:hidden flex justify-center items-center">
          <Hamburger size={25} toggled={isOpen} toggle={setIsOpen} />
        </div>

        <div className="flex gap-[5rem]  items-center">
          <img src="/img/logo.png" className="h-10 w-32" />
          <ul className="lg:flex hidden flex-row  space-x-14 text-[#9e9e9e]  ">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  className="active:text-[#5E8451] active:font-semibold flex font-medium transition-all items-center"
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <MobileNav isOpen={isOpen} />
      <div className="space-x-9 flex justify-center items-center">
        {isLogin ? (
          <UserAvatar />
        ) : (
          <>
            <ButtonLink to="/daftar">Daftar</ButtonLink>
            <Link to="/masuk">Masuk</Link>
          </>
        )}
      </div>
    </nav>
  );
}
