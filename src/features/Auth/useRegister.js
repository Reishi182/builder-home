import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useRegister() {
  const navigate = useNavigate();
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/login", { replace: true });
      toast.success("Silahkan Login!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isLoading, signup };
}
