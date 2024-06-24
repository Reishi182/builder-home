import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteUser as deleteUserApi } from "../../services/apiUser";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    isLoading,
    deleteUser,
  };
}
