import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../../services/apiWishlist";
import { useCurrentUser } from "../Auth/useCurrentUser";

export function useWishlist() {
  const { user } = useCurrentUser();

  const { isLoading, data: wishlist } = useQuery({
    queryKey: ["wishlist", user?.id],
    queryFn: () => (user ? getWishlist(user.id) : Promise.resolve([])),
    enabled: !!user,
    retry: false,
  });

  return { isLoading, wishlist };
}
