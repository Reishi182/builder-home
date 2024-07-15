import { useMutation } from "@tanstack/react-query";
import { changePassword as changePasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useAuthStore } from "./AuthSlice";

export function useChangePassword() {
  const { logout } = useAuthStore((state) => state);
  const { isLoading, mutate: changePassword } = useMutation({
    mutationFn: ({ id, data }) => {
      return changePasswordApi(id, data); // Tambahkan return di sini
    },
    onSuccess: (data) => {
      logout();
      toast.success("Successfully changed your password,Please login again");
    },
    onError: (err) => {
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.message || "An error occurred");
      }
    },
  });
  return { isLoading, changePassword };
}
