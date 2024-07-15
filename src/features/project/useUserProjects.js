import { useQuery } from "@tanstack/react-query";
import { getAllUserProject } from "../../services/apiProjects";
import { useAuthStore } from "../Auth/AuthSlice";

export function useUserProjects() {
  const { user } = useAuthStore((state) => state);

  const {
    isLoading,
    data: userProjects,
    error,
  } = useQuery({
    queryKey: ["projects", user],
    queryFn: () => getAllUserProject(user),
  });

  return { isLoading, userProjects, error };
}
