import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser } from "../../services/apiUser";

export function useUpdateUser() {
  const { isLoading, mutate: update } = useMutation({
    mutationFn: (id, userData) => updateUser({ id, ...userData }),
    onSuccess: () => {
      toast.success(`Update Successful`);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    isLoading,
    update,
  };
}
