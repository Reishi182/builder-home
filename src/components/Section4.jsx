import UserCard from "./UserCard";
import { useUsers } from "../features/Auth/useUsers";
import NoUsers from "./../features/arsitek/NoUsers";
import { Spinner } from "@nextui-org/react";
export default function Section4() {
  const { users, isLoading } = useUsers();
  if (isLoading) return <Spinner />;
  const userItem =
    users.length > 3 ? users.slice(0, 3) : users.slice(0, users.length);
  return (
    <section className="bg-[#F4F4F4] px-16 py-11 pb-20">
      <div className="">
        <div>
          <h1 className="text-[4rem] font-bold">Jasa Arsitek</h1>
        </div>
        <div className="grid grid-cols-1 place-items-center gap-14 sm:grid-cols-2 lg:grid-cols-3 ">
          {userItem.length > 0 ? (
            userItem.map((item, i) => <UserCard user={item} key={i} />)
          ) : (
            <NoUsers />
          )}
        </div>
      </div>
    </section>
  );
}
