import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useRegister() {
  const navigate = useNavigate();
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      // navigate("/", { replace: true });
      toast.success("Berhasil Login");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isLoading, signup };
}
