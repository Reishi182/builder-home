import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addWishlist } from "../../services/apiWishlist";

export function useAddWishlist() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: addWish } = useMutation({
    mutationFn: addWishlist,
    onSuccess: () => {
      toast.success("Successfully added to your wishlist");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    isLoading,
    addWish,
  };
}
