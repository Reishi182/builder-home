import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createProject as createProjectApi } from "../../services/apiProjects";

export function useCreateProject() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: () => {
      toast.success("Successfully created a project");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      navigate(-1, { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    isLoading,
    createProject,
  };
}
