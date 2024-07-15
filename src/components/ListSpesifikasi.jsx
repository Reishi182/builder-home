export default function ListSpesifikasi({ name, spec, value }) {
  const isArray = Array.isArray(spec) && Array.isArray(value);

  return (
    <div className="space-y-2   ">
      <h1 className="text-xl font-semibold">{name}</h1>
      {isArray ? (
        spec.map((item, i) => (
          <h1
            key={i}
            className="flex w-full items-center justify-between border-b-1 border-gray-300"
          >
            <span className="block  font-medium">{item}</span>
            <span className="block text-left font-medium">{value[i]}</span>
          </h1>
        ))
      ) : (
        <h1 className="flex w-full items-center justify-between border-b-1 border-gray-300">
          <span className="block font-medium">{spec}</span>
          <span className="block font-medium">{value}</span>
        </h1>
      )}
    </div>
  );
}
