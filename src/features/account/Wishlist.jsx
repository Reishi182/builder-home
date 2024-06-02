import { useState } from "react";
import TransactionCard from "../../components/TransactionCard";
import { houseItems } from "../../utils/data";
import NoTransaction from "./NoTransaction";
import { useNavigate } from "react-router-dom";

export default function Wishlist() {
  const [items, setItems] = useState(houseItems);
  const navigate = useNavigate();

  function handleDelete(id) {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  }
  function handleNavigate(id) {
    window.scrollTo(0, 0);
    navigate(`${id}`);
  }

  if (items.length === 0) return <NoTransaction />;

  return items.map((item, i) => (
    <TransactionCard
      key={i}
      handleDelete={() => handleDelete(item.id)}
      handleNavigate={() => handleNavigate(item.id)}
      item={item}
    />
  ));
}
