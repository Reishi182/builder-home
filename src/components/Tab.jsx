import { Link, useLocation } from "react-router-dom";

export default function Tab({ children, to }) {
  const location = useLocation();
  const path = `/service/${to}`;
  return (
    <Link
      to={to}
      className={`px-8 block font-bold text-[#7D7D7D] ${
        path === location.pathname
          ? "border-[#5E8451] border-b-2"
          : "rounded-lg border-1 border-gray-200"
      }   bg-[#FAFAFA] py-2 text-lg`}
    >
      {children}
    </Link>
  );
}
