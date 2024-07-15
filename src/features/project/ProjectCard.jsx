import { useNavigate } from "react-router-dom";
import { formatCurrency } from "./../../utils/helpers";
export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
    <div
      className="w-[25rem] flex-col rounded-xl border-1 border-[#7D7D7D] shadow-custom"
      onClick={() => navigate(`upload-proyek/${project.project_id}`)}
    >
      <img src={project.image_cover} className="h-72 w-full" />
      <div className="flex flex-col space-y-7 p-8">
        <h1 className="text-2xl font-bold">{project.projectName}</h1>
        <h1 className="text-2xl font-medium">
          {formatCurrency(project.price)}
        </h1>
      </div>
    </div>
  );
}
