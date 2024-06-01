import { Link } from "react-router-dom";
import { FaCircleExclamation } from "react-icons/fa6";
export default function NoTransaction() {
  return (
    <div className="flex w-full items-center space-x-8 bg-[#FFFBEE] px-3 py-5">
      <FaCircleExclamation color="#FBBC05" size={23} />
      <h1 className="text-lg">
        <span className="block">Yah! Anda belum punya pilihan apapun. </span>
        <h1>
          <Link className="font-semibold" to="/service">
            Klik disini{" "}
          </Link>
          <span> untuk mencari desain rumah idaman Anda sekarang.</span>
        </h1>
      </h1>
    </div>
  );
}
