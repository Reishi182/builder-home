import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser } from "../../services/apiUser";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: update } = useMutation({
    mutationFn: ({ data, id }) => updateUser(data, id),
    onSuccess: (data) => {
      toast.success(`Successfully update your User Information`);
      queryClient.invalidateQueries({ queryKey: ["user"] });
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
