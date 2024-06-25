import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import ProjectUserCard from "../project/ProjectUserCard";
import { useUserProjects } from "./../project/useUserProjects";
import NoProject from "./NoProject";
export default function MyProject() {
  const { userProjects, isLoading } = useUserProjects();
  if (isLoading) return <Loading />;
  return (
    <div className="w-full px-24 py-12">
      <h1 className="pb-10 text-[2.5rem] font-semibold text-[#C0702E]">
        My Project
      </h1>
      {!userProjects.length && <NoProject />}
      {userProjects.length &&
        userProjects.map((project, i) => (
          <ProjectUserCard key={i} project={project} />
        ))}
      <div className=" mt-6  flex justify-center sm:justify-end  ">
        <div className="flex flex-col items-center  space-y-7 rounded-xl px-5 py-10 shadow-custom">
          <h1 className="text-center">
            <span className="block text-xl font-semibold">
              You Can Upload a File
            </span>
            <span className="block">
              Click on the button or drag & drop files here
            </span>
          </h1>
          <Link
            to="/service/proyek/upload-proyek"
            className="rounded-full bg-[#74916B] px-16 py-7 text-white"
          >
            Upload Project
          </Link>
        </div>
      </div>
    </div>
  );
}
