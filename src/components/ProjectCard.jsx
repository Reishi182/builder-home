import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col  rounded-2xl shadow-custom">
      <img src={project.image_cover} className="w-[30rem]" />
      <div className="flex flex-col items-center justify-center space-y-6 px-4 py-5 pb-10">
        <div className=" flex flex-col items-center">
          <span className="block text-xl font-medium">{project.name}</span>
          <span className="flex  items-center space-x-2 text-[#888888]">
            <span>
              <FaLocationDot />
            </span>
            <span className="inline-block">{project.location}</span>
          </span>
        </div>
        <Link
          to={`project/${project.project_id}`}
          className="rounded-lg bg-[#5E8451] px-14 py-2 text-white"
        >
          Detail
        </Link>
      </div>
    </div>
  );
}
