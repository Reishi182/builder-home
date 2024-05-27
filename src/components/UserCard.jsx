import { FaStar } from "react-icons/fa6";
import { HiOutlineCash } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function UserCard({ name, role, id, phone }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    window.scrollTo(0, 0);
    navigate(`/service/arsitek/${id}`);
  };

  const handleSendMessageClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex flex-col bg-[#FEFEFE] sm:w-full w-[80%] shadow-custom rounded-xl mt-20 cursor-pointer"
    >
      <img src="/img/alisa.png" className="rounded-lg" alt={`${name}`} />
      <div className="px-6 py-4">
        <div className="border-b-1">
          <h1>
            <span className="font-bold text-3xl block">{name}</span>
            <span className="font-medium text-lg text-[#969696] block">
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
          <h1>
            <span className="block font-light text-sm">Verified License</span>
            <span className="block text-lg text-[#969696] font-medium tracking-wide">
              $100 - $1500
            </span>
          </h1>
        </div>
        <div className="mt-6 flex items-center space-x-4">
          <a
            href={`https://wa.me/${phone}`}
            onClick={handleSendMessageClick}
            className="px-7 flex items-center text-xl justify-center gap-3 py-3 bg-[#5E8451] text-white rounded-xl"
          >
            <IoMdMail />
            <span className="block">Send Message</span>
          </a>
        </div>
      </div>
    </div>
  );
}
