import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProjectSection from "../features/project/ProjectSection";
import ProjectList from "../features/project/ProjectList";
import { useUserProjects } from "../features/project/useUserProjects";
import toast from "react-hot-toast";

export default function Project() {
  const {
    userProjects,
    isLoading: isProjectLoading,
    error,
  } = useUserProjects();
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error("Something is Wrong ");
      navigate(-1, { replace: true });
    }
  }, [error, userProjects, navigate]);

  useEffect(() => {
    if (!isProjectLoading && userProjects !== undefined) {
      setProjectsLoaded(true);
    }
  }, [isProjectLoading, userProjects]);

  if (isProjectLoading || !projectsLoaded) return <Loading />;

  return (
    <div className="w-full">
      <h1 className="text-center text-3xl font-bold text-[#C0702E] min-[715px]:text-start">
        Desain/Project Kamu
      </h1>
      {userProjects.length > 0 ? <ProjectList /> : <ProjectSection />}
    </div>
  );
}
