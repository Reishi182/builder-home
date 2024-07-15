import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu as DropdownMenus,
  DropdownItem,
  Spinner,
} from "@nextui-org/react";
import { useAuthStore } from "./../features/Auth/AuthSlice";
import { useCurrentUser } from "../features/Auth/useCurrentUser";
export default function DropdownUser({ children }) {
  const { isLoading, user } = useCurrentUser();
  const { logout } = useAuthStore((state) => state);

  function handleLogout() {
    logout();
  }
  if (isLoading) return <Spinner />;
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom">
        <DropdownTrigger>{children}</DropdownTrigger>
        <DropdownMenus aria-label="Profile Actions" variant="flat">
          <DropdownItem key="account" className="h-14  gap-2">
            <p className="text-xl font-semibold">Signed in as</p>
            <p className="text-xl font-semibold">{user?.email || ""}</p>
          </DropdownItem>
          <DropdownItem key="profile" href="/account/profile">
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
