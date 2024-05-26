import { FaLocationDot } from "react-icons/fa6";

export default function ProjectCard() {
  return (
    <div className="flex flex-col  shadow-custom rounded-2xl">
      <img src="/img/sample.png" />
      <div className="space-y-6 px-4 py-5 pb-10 flex flex-col items-center justify-center">
        <div className=" flex flex-col items-center">
          <span className="block text-xl font-medium">
            Project of Mosque Square
          </span>
          <span className="flex  text-[#888888] items-center space-x-2">
            <span>
              <FaLocationDot />
            </span>
            <span className="inline-block">Bali</span>
          </span>
        </div>
        <button className="bg-[#5E8451] px-14 py-2 rounded-lg text-white">
          Detail
        </button>
      </div>
    </div>
  );
}
