import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AddressBar from "../features/payment/AddressBar";
import ItemsBar from "../features/payment/ItemsBar";
import PaymentMethod from "../features/payment/PaymentMethod";
import PaymentDetails from "./PaymentDetails";

export default function Payment() {
  const navigate = useNavigate();
  return (
    <div className="flex  w-full flex-col px-5 py-14 min-[392px]:px-20">
      <button
        className="flex items-center space-x-3 text-xl font-semibold"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeftLong />
        <span>Kembali</span>
      </button>
      <h1 className="py-10 text-3xl font-bold text-[#C0702E]">Transaction</h1>
      <div className="flex w-full flex-col px-6 py-14 shadow-custom">
        <AddressBar />
        <ItemsBar />
        <PaymentMethod />
        <PaymentDetails />
      </div>
    </div>
  );
}
