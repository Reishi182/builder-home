import { formatCurrency } from "./../../utils/helpers";
import Stars from "./../../components/Stars";
import { useDeleteProject } from "./useDeleteProject";
import { useNavigate } from "react-router-dom";

export default function ProjectUserCard({ project }) {
  const { projectName, username, price, image_cover, project_id } = project;
  const { deleteUserProject } = useDeleteProject();
  const navigate = useNavigate();

  const handleDeleteProject = (event, projectId) => {
    event.stopPropagation();
    deleteUserProject(projectId);
  };

  return (
    <div
      className="flex w-full border-1 border-gray-100 bg-[#FCFCFC] px-14 py-8"
      onClick={() => navigate(`/service/proyek/upload-proyek/${project_id}`)}
    >
      <div className="flex w-full flex-col items-center justify-between min-[323px]:flex-row">
        <div className="flex flex-col space-x-0 min-[393px]:flex-row min-[393px]:space-x-10">
          <img src={image_cover} className="w-56" />
          <div className="flex flex-col items-center space-y-2 py-3 min-[323px]:items-start">
            <h1 className="text-xl font-bold">{projectName}</h1>
            <h1 className="text-medium">design by {username}</h1>
            <Stars rating={5} totalStars={5} />
            <h1 className="text-medium font-semibold">
              {formatCurrency(price)}
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4 min-[323px]:space-y-8">
          <button
            onClick={(event) => handleDeleteProject(event, project_id)}
            className="rounded-lg bg-[#e8afaf96] px-5 py-2.5 font-semibold text-[#F42C2C]"
          >
            Hapus Project
          </button>
        </div>
      </div>
    </div>
  );
}
