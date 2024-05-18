/* eslint-disable react/prop-types */
import { BsArrowsFullscreen } from "react-icons/bs";
import { HiOutlineCash } from "react-icons/hi";
export default function ItemCard({ title, designer, img }) {
  return (
    <div className="flex flex-col mr-5 mt-10 flex-1 bg-[#FEFEFE] rounded-xl ">
      <img src={img} className="rounded-lg" />
      <div className="px-6 py-4">
        <div className=" border-b-1 ">
          <h1>
            <span className="font-bold text-2xl block">{title}</span>
            <span className="font-medium text-base block mb-4">
              Design By {designer}
            </span>
          </h1>
        </div>
        <div className="mt-6 flex items-center space-x-4">
          <span>
            <BsArrowsFullscreen className="text-[2rem]" />
          </span>
          <h1 className="">
            <span className="block font-light text-base">Lahan Minimal</span>
            <span className="block text-lg font-medium tracking-widest">
              16 m x 7 m
            </span>
          </h1>
        </div>
        <div className="mt-3 flex items-center space-x-4">
          <span>
            <HiOutlineCash className="text-[2.3rem]" />
          </span>
          <h1 className="">
            <span className="block font-light text-sm"> Biaya Konstruksi</span>
            <span className="block text-lg font-medium tracking-wide">
              Estimasi Biaya Konstruksi
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
