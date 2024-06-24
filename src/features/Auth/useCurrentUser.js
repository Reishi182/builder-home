import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUser";
import { useAuthStore } from "./AuthSlice";

export function useCurrentUser() {
  const { user: userId } = useAuthStore((state) => state);
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(userId),
  });

  return { isLoading, user };
}
