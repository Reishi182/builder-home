import UserCard from "./../components/UserCard";
import { useQuerySlice } from "./../slices/QuerySlice";
import { useUsers } from "./../features/Auth/useUsers";
import NoUsers from "./../features/arsitek/NoUsers";
import { Spinner } from "@nextui-org/react";

export default function Arsitek() {
  const { users, isLoading } = useUsers();
  const { query } = useQuerySlice((state) => state);
  const filteredUsers = query
    ? users.filter((user) =>
        user.username.toLowerCase().includes(query.toLowerCase()),
      )
    : users;
  if (isLoading) return <Spinner />;
  return (
    <div className="flex w-full flex-col">
      <h1 className="text-center text-[3rem] font-semibold text-[#C0702E] md:text-start">
        Arsitek
      </h1>
      {filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2  lg:grid-cols-3">
          {filteredUsers.map((item, i) => (
            <UserCard key={i} user={item} />
          ))}
        </div>
      ) : (
        <NoUsers />
      )}
    </div>
  );
}
