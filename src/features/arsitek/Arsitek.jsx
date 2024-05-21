import UserCard from "../../components/UserCard";
import { users } from "../../utils/data";

export default function Arsitek() {
  return (
    <div>
      <h1 className="text-[#C0702E] text-[3rem] md:text-start text-center font-semibold">
        Arsitek
      </h1>

      <div className="grid lg:grid-cols-3 gap-14 md:place-items-start place-items-center lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-1">
        {users.map((item, i) => (
          <UserCard key={i} name={item.name} role={item.role} id={item.id} />
        ))}
      </div>
    </div>
  );
}
