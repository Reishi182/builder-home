import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../services/apiProjects";
import { useAuthStore } from "../Auth/AuthSlice";

export function useProject(projectId) {
  const { user } = useAuthStore((state) => state);
  const { isLoading, data: project } = useQuery({
    queryKey: ["project", { user }],
    queryFn: () => getProject(projectId),
  });

  return { isLoading, project };
}
