import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../services/apiProjects";
import { useParams } from "react-router-dom";

export function useProject() {
  const { itemId } = useParams();

  const { isLoading, data: project } = useQuery({
    queryKey: ["project", itemId],
    queryFn: () => getProject(itemId),
    retry: false,
  });

  return { isLoading, project };
}
