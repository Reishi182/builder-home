import UserCard from "./UserCard";
import { users } from "./../utils/data";
export default function Section4() {
  return (
    <section className="bg-[#F4F4F4] px-16 py-11 pb-20">
      <div className="">
        <div>
          <h1 className="text-[4rem] font-bold">Jasa Arsitek</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 lg:grid-cols-3 place-items-center ">
          <UserCard
            name={users[0].name}
            role={users[0].role}
            id={users[0].id}
          />
          <UserCard
            name={users[1].name}
            role={users[1].role}
            id={users[1].id}
          />
          <UserCard
            name={users[2].name}
            role={users[2].role}
            id={users[3].id}
          />
        </div>
      </div>
    </section>
  );
}
