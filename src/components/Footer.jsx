import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Icon from "./Icon";
import { TiSocialInstagram } from "react-icons/ti";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className=" bg-[#95B26F] ">
      <div className="space-y-9 md:pl-[10rem] pr-[2rem] sm:pr-[8rem] pl-[4rem] py-[5rem]">
        <div className="flex justify-between items-center ">
          <ul className="text-white flex gap-8 text-lg flex-col md:flex-row tracking-wide font-semibold">
            <li>Tentang Kami</li>
            <li>Artikel</li>
            <li>Kebijakan Privasi</li>
            <li>Syarat dan Ketentuan</li>
            <li>FAQ</li>
          </ul>
          <div className="flex space-x-7 ">
            <Icon>
              <FaFacebookF color="#95B26F" />
            </Icon>
            <Icon>
              <FaTiktok color="#95B26F" />
            </Icon>
            <Icon>
              <TiSocialInstagram color="#95B26F" />
            </Icon>
            <Icon>
              <FaWhatsapp color="#95B26F" />
            </Icon>
            <Icon>
              <SiGmail color="#95B26F" />
            </Icon>
          </div>
        </div>
        <div className="flex items-center text-white text-lg md:justify-normal justify-center font-semibold space-x-6">
          <img src="/img/logo.png" className="w-[10rem]" />
          <span className="block">
            © COPYRIGHT 2024 ALL RIGHTS RESERVED | BUILDER HOME
          </span>
        </div>
      </div>
    </footer>
  );
}
