import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { isLoading, login };
}
