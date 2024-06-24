import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useResetPassword() {
  const navigate = useNavigate();
  const { isLoading, mutate: resetPasswordUser } = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: () => {
      toast.success("Your password is successfuly reset");
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { isLoading, resetPasswordUser };
}
