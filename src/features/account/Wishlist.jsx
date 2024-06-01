import { useState } from "react";
import TransactionCard from "../../components/TransactionCard";
import { houseItems } from "../../utils/data";
import NoTransaction from "./NoTransaction";

export default function Wishlist() {
  const [items, setItems] = useState(houseItems);

  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }

  if (items.length === 0) return <NoTransaction />;

  return items.map((item, i) => (
    <TransactionCard
      key={i}
      handleDelete={() => handleDelete(item.id)}
      item={item}
    />
  ));
}
