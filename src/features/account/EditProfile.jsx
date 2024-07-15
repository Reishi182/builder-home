import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const lists = [
    { title: "Info Pribadi", path: "personal-info" },
    { title: "Reset Password", path: "reset_password" },
    { title: "Delete Akun", path: "delete_account" },
  ];
  return (
    <div className="flex flex-col min-[447px]:flex-row">
      <div className="flex w-full bg-[#F7F7F7] min-[447px]:w-[30rem] ">
        <div className="flex- flex w-full justify-between space-x-5 space-y-0 px-10 py-14 min-[447px]:flex-col min-[447px]:justify-start min-[447px]:space-x-0 min-[447px]:space-y-4 min-[447px]:px-10">
          <button
            onClick={() => navigate("/account/profile")}
            className="flex items-center space-x-2 text-xl text-[#5E8451] "
          >
            <FaArrowLeftLong />
            <span className="block">Kembali</span>
          </button>
          <div className="flex space-x-5  space-y-0 min-[447px]:flex-col  min-[447px]:space-x-0 min-[447px]:space-y-5">
            {lists.map((item) => (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `text-xl underline ${
                        item.path === "delete_account" ? "text-red-500" : ""
                      } font-semibold`
                    : `text-xl ${
                        item.path === "delete_account" ? "text-red-500" : ""
                      } font-semibold`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
