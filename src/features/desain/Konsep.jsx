import List from "../../components/List";
import { formatCurrency } from "./../../utils/helpers";

export default function Konsep({ price }) {
  const konsep = [
    { name: "Ukuran Lahan", spec: "10 x 20 m" },
    { name: "Luas Lahan", spec: "800 m2" },
    { name: "Luas Bangunan", spec: "750 m2" },
    { name: "Jumlah Lantai", spec: "2 Lantai" },
    { name: "Kamar Tidur", spec: "2 Kamar Tidur" },
    { name: "Kamar Mandi", spec: "2 Kamar Mandi" },
    { name: "Gaya Desain", spec: "Modern Klasik" },
  ];
  return (
    <div className="flex    flex-col space-y-3 rounded-2xl bg-[#F7F7F7] px-8 py-10">
      <div className="flex w-full flex-col border-b-1 border-gray-200 pb-6">
        <span className="block font-medium">Biaya Konstruksi Mulai Dari</span>
        <span className="block text-2xl font-bold text-[#5E8451]">
          {formatCurrency(price)}
        </span>
      </div>
      <div className="flex flex-col space-y-2">
        {Array.from({ length: 7 }, (_, i) => (
          <List
            number={i + 1}
            key={i}
            name={konsep[i].name}
            spec={konsep[i].spec}
          />
        ))}
      </div>
    </div>
  );
}
