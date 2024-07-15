import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUser";

export function useUsers() {
  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    retry: false,
  });

  return { isLoading, error, users };
}
