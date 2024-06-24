import { useQuery } from "@tanstack/react-query";
import { getAllUserProject } from "../../services/apiProjects";

export function useUserProjects(id) {
  const { isLoading, data: userProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllUserProject(id),
  });

  return { isLoading, userProjects };
}
