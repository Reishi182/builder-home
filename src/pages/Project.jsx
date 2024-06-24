import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../features/Auth/AuthSlice";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProjectSection from "../features/project/ProjectSection";
import ProjectList from "../features/project/ProjectList";
import { useUserProjects } from "../features/project/useUserProjects";
import toast from "react-hot-toast";

export default function Project() {
  const { user } = useAuthStore((state) => state);
  const {
    userProjects,
    isLoading: isProjectLoading,
    isError,
  } = useUserProjects(user);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error("Something is Wrong ");
      navigate(-1, { replace: true });
    }
  }, [isError, userProjects, navigate]);

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
