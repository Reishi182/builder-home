import { FaStar } from "react-icons/fa6";
import { HiOutlineCash } from "react-icons/hi";
import { IoMdMail } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../utils/helpers";
export default function UserCard({ user }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    window.scrollTo(0, 0);
    navigate(`/service/arsitek/${user.id}`);
  };

  const handleSendMessageClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleCardClick}
      className="mt-20 flex w-[30rem]  cursor-pointer flex-col rounded-xl bg-[#FEFEFE] shadow-custom "
    >
      <img
        src={user.avatar || "https://placehold.co/600x400"}
        className="rounded-lg"
        alt={`${user.username}`}
      />
      <div className="px-6 py-4">
        <div className="border-b-1">
          <h1>
            <span className="block text-3xl font-bold">{user.username}</span>
            <span className="block text-lg font-medium text-[#969696]">
              Architect & Building Designer{" "}
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
            <span className="block text-sm font-light">Verified License</span>
            <span className="block text-lg font-medium tracking-wide text-[#969696]">
              {`${formatCurrency(10000000)} - ${formatCurrency(30000000)}`}
            </span>
          </h1>
        </div>
        <div className="mt-6 flex items-center space-x-4">
          <a
            href={`https://wa.me/${user.phone}`}
            onClick={handleSendMessageClick}
            className="flex items-center justify-center gap-3 rounded-xl bg-[#5E8451] px-7 py-3 text-xl text-white"
          >
            <IoMdMail />
            <span className="block">Send Message</span>
          </a>
        </div>
      </div>
    </div>
  );
}
