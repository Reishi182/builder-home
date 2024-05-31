import { useSearchParams } from "react-router-dom";
import ButtonTab from "../../components/ButtonTab";
import TransactionCard from "../../components/TransactionCard";
import { houseItems } from "../../utils/data";

export default function Transaction() {
  const lists = [
    { label: "Wishlist", value: "wishlist" },
    { label: "Riwayat Transaksi", value: "riwayatTransaksi" },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || lists[0].value;
  function handleParams(value) {
    searchParams.set("tab", value);
    setSearchParams(searchParams);
  }

  return (
    <div className=" flex h-[73vh] w-full flex-col space-y-5 py-20 pl-20 pr-20  sm:h-screen sm:px-0 sm:py-0 sm:pl-20 sm:pr-10 min-[680px]:mt-0">
      <h1 className="text-3xl font-bold text-[#C0702E]">Transaction</h1>
      <div className="flex space-x-10">
        {lists.map((item, i) => (
          <ButtonTab
            key={i}
            onClick={() => handleParams(item.value)}
            active={currentTab === item.value}
          >
            {item.label}
          </ButtonTab>
        ))}
      </div>
      <div className="flex  w-full flex-col space-y-8 overflow-y-auto rounded-xl px-10 py-10 shadow-custom">
        {houseItems.map((item, i) => (
          <TransactionCard
            key={i}
            img={item.img}
            title={item.title}
            rating={item.rating}
            price={item.price}
            designer={item.designer}
          />
        ))}
      </div>
    </div>
  );
}
