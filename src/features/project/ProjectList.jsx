import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ProjectCard from "./ProjectCard";
import { useUserProjects } from "./useUserProjects";
export default function ProjectList() {
  const { userProjects, isLoading } = useUserProjects();
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-center gap-10 py-10 ">
        {userProjects.map((project, i) => (
          <ProjectCard key={i} isLoading={isLoading} project={project} />
        ))}
      </div>
      <div className="flex justify-end">
        <div className="flex  flex-col  items-center justify-center space-y-10 rounded-[2rem] px-10 py-10 shadow-custom">
          <h1 className="flex flex-col items-center space-y-3">
            <span className="text-2xl font-bold">You Can Upload a File</span>
            <span className="font-semibold text-[#7D7D7D]">
              Click on the button to upload your project
            </span>
          </h1>
          <Link
            to="upload-proyek"
            className="flex items-center justify-center gap-3 rounded-full bg-[#74916B] px-10 py-7 text-xl text-white"
          >
            Upload Project
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}
