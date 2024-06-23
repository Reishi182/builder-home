import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiUser";

export function useUser(id) {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser(id),
  });

  return { isLoading, error, user };
}
