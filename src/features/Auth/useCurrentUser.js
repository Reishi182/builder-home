import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUser";
import { useAuthStore } from "./AuthSlice";

export function useCurrentUser() {
  const { user: userId } = useAuthStore((state) => state);
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
    retry: false,
  });

  return { isLoading, user, error };
}
