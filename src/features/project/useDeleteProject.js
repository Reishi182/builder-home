import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProject } from "../../services/apiProjects";

export function useDeleteProject() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteUserProject } = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      toast.success("Successfully delete your project");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    isLoading,
    deleteUserProject,
  };
}
