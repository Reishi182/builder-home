import TransactionCard from "../../components/TransactionCard";
import NoTransaction from "./NoTransaction";
import { useWishlist } from "./../wishlist/useWishlist";

export default function Wishlist() {
  const { wishlist, isLoading } = useWishlist();

  if (wishlist?.wishlists?.length === 0) return <NoTransaction />;

  return wishlist?.wishlists?.map((item, i) => (
    <TransactionCard key={i} item={item} />
  ));
}
