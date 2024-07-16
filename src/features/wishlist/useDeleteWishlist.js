import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteWishlist } from "../../services/apiWishlist";

export function useDeleteWishlist() {
  const queryClient = useQueryClient();

  const { isLoading, mutate: deleteWish } = useMutation({
    mutationFn: deleteWishlist,
    onSuccess: () => {
      toast.success("Successfully deleted your wishlist");
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {
    isLoading,
    deleteWish,
  };
}
