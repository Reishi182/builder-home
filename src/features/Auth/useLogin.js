import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuthStore } from "./AuthSlice";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setUser, setToken, token } = useAuthStore((state) => state);

  const { isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      setToken(data.token);
      setUser(data.user.id);
      navigate("/");
      toast.success(`Welcome Back ${data.user.username}`);
      queryClient.setQueryData([`${data.user.username}`], data.user.id);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return {
    isLoading,
    login,
    isAuthenticated: Boolean(token),
  };
}
