import { useMutation } from "@tanstack/react-query";
import { forgetPassword as forgetPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useForgetPassword() {
  const { isLoading, mutate: forgetPassword } = useMutation({
    mutationFn: forgetPasswordApi,

    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { isLoading, forgetPassword };
}
