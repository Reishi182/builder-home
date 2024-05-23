import UserCard from "./../components/UserCard";
import { useQuerySlice } from "./../slices/QuerySlice";
import NoUsers from "./../features/arsitek/NoUsers";

export default function Arsitek() {
  const filterUsers = useQuerySlice((state) => state.getUsers());
  console.log(filterUsers);
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-[#C0702E] text-[3rem] md:text-start text-center font-semibold">
        Arsitek
      </h1>
      {filterUsers.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-14 md:place-items-start place-items-center lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-1">
          {filterUsers.map((item, i) => (
            <UserCard key={i} name={item.name} role={item.role} id={item.id} />
          ))}
        </div>
      ) : (
        <NoUsers />
      )}
    </div>
  );
}
