import { useQuery } from "@tanstack/react-query";
import { getAllUserProject } from "../../services/apiProjects";
import { useParams } from "react-router-dom";

export function useUserProjectDetail() {
  const { userId } = useParams();

  const {
    isLoading,
    data: userProjects,
    error,
  } = useQuery({
    queryKey: ["projects", userId],
    queryFn: () => getAllUserProject(userId),
  });

  return { isLoading, userProjects, error };
}
