import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../services/apiProjects";

export function useProject(projectId) {
  const { isLoading, data: project } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => getProject(projectId),
  });

  return { isLoading, project };
}
