export default function TabName({ icon, value, name }) {
  return (
    <div className="flex items-center  space-x-4 space-y-5 md:space-y-0">
      <span className="block text-[4rem]">{icon}</span>
      <h1>
        <span className="block text-3xl font-semibold">{value}+</span>
        <span className="block -mt-1 font-medium text-lg">{name}</span>
      </h1>
    </div>
  );
}
