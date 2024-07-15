/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function ButtonLink({ to, children }) {
  return (
    <Link
      to={to}
      className="px-7 flex items-center text-xl justify-center gap-3 py-3 bg-[#5E8451] text-white rounded-xl"
    >
      {children}
    </Link>
  );
}
