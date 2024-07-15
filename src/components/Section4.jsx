import UserCard from "./UserCard";
import { useUsers } from "../features/Auth/useUsers";
import NoUsers from "./../features/arsitek/NoUsers";
import Loading from "./Loading";

export default function Section4() {
  const { users, isLoading } = useUsers();

  if (isLoading) return <Loading />;

  const userItem =
    users.length > 3 ? users.slice(0, 3) : users.slice(0, users.length);
  const hasSingleUser = userItem.length === 1;

  return (
    <section className="bg-[#F4F4F4] px-16 py-11 pb-20">
      <div>
        <div>
          <h1 className="text-[4rem] font-bold">Jasa Arsitek</h1>
        </div>
        <div
          className={`grid ${hasSingleUser ? "place-items-center" : "grid-cols-1 place-items-center gap-14 sm:grid-cols-2 lg:grid-cols-3"}`}
        >
          {userItem.length > 0 ? (
            userItem.map((item, i) => (
              <div
                key={i}
                className={hasSingleUser ? "flex w-full justify-center" : ""}
              >
                <UserCard user={item} />
              </div>
            ))
          ) : (
            <NoUsers />
          )}
        </div>
      </div>
    </section>
  );
}
