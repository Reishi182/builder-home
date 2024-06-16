import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useResetPassword() {
  const { isLoading, mutate: resetPasswordUser } = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: () => toast.success("Your password reset is successful"),
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { isLoading, resetPasswordUser };
}
