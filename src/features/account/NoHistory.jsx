import { FaCircleExclamation } from "react-icons/fa6";
export default function NoHistory() {
  return (
    <div className="flex w-full items-center space-x-8 bg-[#FFFBEE] px-3 py-5">
      <FaCircleExclamation color="#FBBC05" size={23} />
      <h1 className="text-lg">Anda tidak memiliki Riwayat Transaksi</h1>
    </div>
  );
}
