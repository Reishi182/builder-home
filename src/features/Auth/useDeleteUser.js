import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteUser as deleteUserApi } from "../../services/apiUser";
import { useAuthStore } from "./AuthSlice";

export function useDeleteUser() {
  const queryClient = useQueryClient();
  const { logout } = useAuthStore((state) => state);

  const { isLoading, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      logout();
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
