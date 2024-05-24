import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const lists = [
    { title: "Info Pribadi", path: "personal-info" },
    { title: "Reset Password", path: "reset_password" },
    { title: "Delete Akun", path: "delete_account" },
  ];
  return (
    <div className="w-full flex ">
      <div className="bg-[#F7F7F7] w-[30rem] ">
        <div className="flex flex-col space-y-4 px-10 py-14">
          <button
            onClick={() => navigate(-1)}
            className="text-xl text-[#5E8451] flex items-center space-x-2 underline"
          >
            <FaArrowLeftLong />
            <span className="inline-block">Kembali</span>
          </button>
          {lists.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "underline text-xl font-semibold"
                  : item.path.includes("delete_account")
                  ? " text-xl font-semibold text-red-600"
                  : "text-xl font-semibold"
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}
