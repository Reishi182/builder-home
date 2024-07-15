import { useQuery } from "@tanstack/react-query";
import { getAllProject } from "../../services/apiProjects";

export function useProjects() {
  const { isLoading, data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: () => getAllProject(),
  });

  return { isLoading, projects };
}
