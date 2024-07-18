/* eslint-disable react/prop-types */
import { BsArrowsFullscreen } from "react-icons/bs";
import { HiOutlineCash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
export default function ItemCard({ project }) {
  const navigate = useNavigate();

  function handleNavigate() {
    window.scrollTo(0, 0);
    navigate(`/service/desain/${project.project_id}`);
  }
  return (
    <div
      className="m-5 flex w-[30rem] flex-col rounded-xl bg-[#FEFEFE] shadow-custom "
      onClick={handleNavigate}
    >
      <img src={project.image_cover} className="h-80 rounded-lg" />
      <div className="px-6 py-4">
        <div className=" border-b-1 ">
          <h1>
            <span className="block text-2xl font-bold">
              {project.projectName}
            </span>
            <span className="mb-4 block text-base font-normal ">
              Design By {project.username}
            </span>
          </h1>
        </div>
        <div className="mt-6 flex items-center space-x-4">
          <span>
            <BsArrowsFullscreen className="text-[2rem]" />
          </span>
          <h1>
            <span className="block text-base font-light">Lahan Minimal</span>
            <span className="block text-lg font-medium tracking-widest">
              16 m x 7 m
            </span>
          </h1>
        </div>
        <div className="mt-3 flex items-center space-x-4">
          <span>
            <HiOutlineCash className="text-[2.3rem]" />
          </span>
          <h1>
            <span className="block text-sm font-light"> Biaya Konstruksi</span>
            <span className="block text-lg font-medium tracking-wide">
              Estimasi Biaya Konstruksi
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
