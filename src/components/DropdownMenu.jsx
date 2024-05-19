import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu as DropdownMenus,
  DropdownItem,
} from "@nextui-org/react";

export default function DropdownMenu({ children, data }) {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom">
        <DropdownTrigger>{children}</DropdownTrigger>
        <DropdownMenus aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14  gap-2">
            <p className="font-semibold text-xl">Signed in as</p>
            <p className="font-semibold text-xl">{data.email}</p>
          </DropdownItem>
          <DropdownItem key="profile" href="/profile">
            <span className="block text-lg">My Profile</span>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            <span className="block text-lg">Log Out</span>
          </DropdownItem>
        </DropdownMenus>
      </Dropdown>
    </div>
  );
}
