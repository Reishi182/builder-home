import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { updateProject } from "../../services/apiProjects";

export function useEditProject() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate: update } = useMutation({
    mutationFn: ({ data, id }) => updateProject(data, id),
    onSuccess: () => {
      toast.success("Successfully update your project");
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      navigate(-1, { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    isLoading,
    update,
  };
}
