import { FaStar } from "react-icons/fa6";
import { HiOutlineCash } from "react-icons/hi";
import ButtonLink from "./ButtonLink";
import { IoMdMail } from "react-icons/io";

export default function UserCard({ name, role }) {
  return (
    <div
      className="flex flex-col bg-[#FEFEFE] w-[80%] rounded-xl mt-20 "
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <img src="/img/alisa.png" className="rounded-lg" />
      <div className="px-6 py-4">
        <div className=" border-b-1 ">
          <h1>
            <span className="font-bold text-3xl block">{name}</span>
            <span className="font-medium text-lg text-[#969696] block ">
              {role}
            </span>
          </h1>
          <h1 className="mb-3 flex space-x-4">
            <span className="inline-block">
              <FaStar color="yellow" size={17} />
            </span>
            <span className="text-lg">5.0 (30 Reviews)</span>
          </h1>
        </div>
        <div className="mt-3 flex items-center space-x-4">
          <span>
            <HiOutlineCash size={20} color="#969696" />
          </span>
          <h1 className="">
            <span className="block font-light text-sm"> Verified License</span>
            <span className="block text-lg text-[#969696] font-medium tracking-wide">
              $100 - $1500
            </span>
          </h1>
        </div>
        <div className="mt-6 flex items-center space-x-4">
          <ButtonLink>
            <IoMdMail />
            Send Message
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
