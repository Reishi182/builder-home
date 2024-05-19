import UserCard from "../components/UserCard";

export default function Arsitek() {
  const cardsArray = Array.from({ length: 9 }, (_, index) => index);

  return (
    <div>
      <div>
        <h1 className="text-[#C0702E] text-[2.5rem] font-semibold">Arsitek</h1>
      </div>
      <div className="grid lg:grid-cols-3 lg:grid-rows-3 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-1">
        {cardsArray.map((index) => (
          <UserCard key={index} />
        ))}
      </div>
    </div>
  );
}
