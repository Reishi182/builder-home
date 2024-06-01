import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import AddressBar from "../features/payment/AddressBar";

export default function Payment() {
  const navigate = useNavigate();
  return (
    <div className="flex  w-full flex-col px-20 py-14">
      <button
        className="flex items-center space-x-3 text-xl font-semibold"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeftLong />
        <span>Kembali</span>
      </button>
      <h1 className="py-10 text-3xl font-bold text-[#C0702E]">Transaction</h1>
      <div className="flex h-screen w-full flex-col px-6 py-14 shadow-custom">
        <AddressBar />
      </div>
    </div>
  );
}
