import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUser";
import { useParams } from "react-router-dom";

export function useUser() {
  const { userId } = useParams();

  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
    retry: false,
  });

  return { isLoading, error, user };
}
