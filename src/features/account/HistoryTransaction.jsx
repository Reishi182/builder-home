import TransactionCard from "../../components/TransactionCard";
import NoHistory from "./NoHistory";

export default function HistoryTransaction() {
  const history = [];
  if (!history.length) return <NoHistory />;
  return history.map((item, i) => <TransactionCard key={i} item={item} />);
}
