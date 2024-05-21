import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu as DropdownMenus,
  DropdownItem,
  Spinner,
} from "@nextui-org/react";
import { useAuthStore } from "./../features/Auth/AuthSlice";
export default function DropdownUser({ children, data }) {
  const { logout, setLoading } = useAuthStore((state) => state);
  function handleLogout() {
    setLoading(true);
    logout();
    setLoading(false);
  }
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom">
        <DropdownTrigger>{children}</DropdownTrigger>
        <DropdownMenus aria-label="Profile Actions" variant="flat">
          <DropdownItem key="account" className="h-14  gap-2">
            <p className="font-semibold text-xl">Signed in as</p>
            <p className="font-semibold text-xl">{data.email}</p>
          </DropdownItem>
          <DropdownItem key="profile" href="/profile">
            <span className="block text-lg">My Profile</span>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onPress={handleLogout}>
            <button className="block text-lg">Log Out</button>
          </DropdownItem>
        </DropdownMenus>
      </Dropdown>
    </div>
  );
}
