import TransactionCard from "../../components/TransactionCard";
import NoHistory from "./NoHistory";

export default function HistoryTransaction() {
  const history = [
    {
      id: 1,
      title: "Korean Modern Indah",
      designer: "Indah NW",
      img: "/img/House/house1.png",
      rating: 5,
      price: 100000000,
      status: "success",
      date: "2023-03-15",
    },
    {
      id: 2,
      title: "Japan Modern Sakura",
      designer: "Indah NW",
      img: "/img/House/house2.png",
      rating: 5,
      price: 100000000,
      status: "success",
      date: "2023-05-20",
    },
    {
      id: 3,
      title: "France Modern Zahra",
      designer: "Indah NW",
      img: "/img/House/house3.png",
      rating: 5,
      price: 100000000,
      status: "success",
      date: "2023-08-11",
    },
    {
      id: 4,
      title: "Italia Modern Vincenzo",
      designer: "Indah NW",
      img: "/img/House/house4.png",
      rating: 5,
      price: 100000000,
      status: "fail",
      date: "2023-10-05",
    },
    {
      id: 5,
      title: "Italia Modern Vincenzo",
      designer: "Indah NW",
      img: "/img/House/house4.png",
      rating: 5,
      price: 100000000,
      status: "fail",
      date: "2023-12-22",
    },
  ];
  if (!history.length) return <NoHistory />;
  return history.map((item, i) => <TransactionCard key={i} item={item} />);
}
