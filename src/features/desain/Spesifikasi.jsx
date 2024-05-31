import ListSpesifikasi from "../../components/ListSpesifikasi";

export default function Spesifikasi() {
  const spesifikasi = [
    { name: "Struktur", spec: "Struktur Beton", value: "Beton Bertulang" },
    { name: "Lantai", spec: "Lantai Granit", value: "Granit 60 X 60" },
    {
      name: "Dinding",
      spec: [
        "Dinding Bata Merah",
        "Plesteran Dinding",
        "Acian Dinding",
        "Cat Dinding",
      ],
      value: [
        "Batu Bata",
        "Portland Cement 2pc : 10ps",
        "Portland Cement 2pc : 10ps",
        "Cat White Interior & Eksterior",
      ],
    },

    {
      name: "Plafon",
      spec: ["Plafon Gypsum", "Rangka Plafon Hollow"],
      value: ["Gypsumboard 10mm", "Hollow 4/8 dan 8/8"],
    },
    { name: "Atap", spec: "Atap Genting", value: "Atap Genting Keramik" },
  ];
  return (
    <div className="flex  w-[35rem] flex-col space-y-3 rounded-2xl bg-[#F7F7F7] px-8 py-10">
      {spesifikasi.map((item, i) => (
        <ListSpesifikasi
          key={i}
          name={item.name}
          spec={item.spec}
          value={item.value}
        />
      ))}
    </div>
  );
}
