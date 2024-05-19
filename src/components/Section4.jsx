import UserCard from "./UserCard";

export default function Section4() {
  const cardsArray = Array.from({ length: 3 }, (_, index) => index);

  return (
    <section className="bg-[#F4F4F4] px-16 py-11 pb-20">
      <div className="">
        <div>
          <h1 className="text-[4rem] font-bold">Jasa Arsitek</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center ">
          {cardsArray.map((index) => (
            <UserCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
