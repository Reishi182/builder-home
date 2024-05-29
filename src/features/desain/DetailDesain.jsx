import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import Stars from "./../../components/Stars";
import { houseItems } from "./../../utils/data";
import ButtonTab from "../../components/ButtonTab";
import ItemCarousel from "../../components/ItemCarousel";
import { useState } from "react";
import List from "../../components/List";
export default function DetailDesain() {
  const [active, setIsActive] = useState("Konsep");
  const navigate = useNavigate();
  const { itemId } = useParams();
  const id = Number(itemId);
  const item = houseItems.find((house) => house.id === id);

  const list = [{ name: "Konsep" }, { name: "Denah" }, { name: "Spesifikasi" }];
  const konsep = [
    { name: "Ukuran Lahan", spec: "10 x 20 m" },
    { name: "Luas Lahan", spec: "800 m2" },
    { name: "Luas Bangunan", spec: "750 m2" },
    { name: "Jumlah Lantai", spec: "2 Lantai" },
    { name: "Kamar Tidur", spec: "2 Kamar Tidur" },
    { name: "Kamar Mandi", spec: "2 Kamar Mandi" },
    { name: "Gaya Desain", spec: "Modern Klasik" },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-6 bg-gradient-to-r from-[#e9fad2ee] to-[#95b26f5e] px-20 py-10 ">
        <div className="flex items-center justify-between ">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-xl font-semibold"
          >
            <FaArrowLeftLong /> <span className="block">Kembali</span>
          </button>
          <div className="space-x-6 text-white *:rounded-lg *:bg-[#5E8451] *:px-3 *:py-2">
            <button>Tambah Favorit</button>
            <button>Hubungi Kami </button>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <h1 className="space-x-1 text-2xl font-medium">
            <span className="inline-block">Design by</span>
            <span className="inline-block font-semibold text-[#C0702E]">
              {item.designer}
            </span>
          </h1>
          <div className="flex items-center space-x-4">
            <Stars totalStars={5} rating={item.rating} />
            <span className="mt-2 block text-center text-lg">
              {item.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
      <div className="min-[810px]:y-0 flex flex-col items-center justify-center space-x-0 space-y-10 border-b-2 border-gray-200  px-10 py-10 min-[810px]:items-start min-[810px]:space-x-20 min-[810px]:px-28 min-[860px]:flex-row">
        <img src={item.img} className="w-[50%]" />
        <h1 className="space-y-5">
          <span className="block text-3xl font-semibold text-[#C0702E]">
            Deskripsi
          </span>
          <p className="text-justify text-lg">
            Rumah Korea Modern: Elegansi Tradisional dengan Sentuhan Kontemporer
            Rumah Korea modern menggabungkan keindahan tradisional Korea dengan
            elemen kontemporer yang menawan. Desain arsitektur rumah ini
            menonjolkan atap bumbung melengkung khas Korea yang memberikan kesan
            elegan dan unik. Fasad rumah didominasi oleh kombinasi material
            alami seperti kayu dan batu, menciptakan harmoni antara alam dan
            struktur bangunan. Pintu masuk utama rumah diperindah dengan desain
            pintu tradisional Korea yang disebut munin atau gerbang pintu,
            seringkali dihiasi dengan ukiran artistik yang menggambarkan
            kekayaan budaya Korea. Ruang terbuka di sekitar rumah memberikan
            kesempatan bagi sinar matahari dan aliran udara segar untuk memasuki
            ruang dalam, menciptakan suasana yang nyaman dan terhubung dengan
            alam sekitar.
          </p>
        </h1>
      </div>
      <div className="space-y-6 px-20 py-10">
        <h1 className="block text-3xl font-semibold text-[#C0702E]">
          Detail Deskripsi
        </h1>
        <div className="flex items-center space-x-5">
          {list.map((item, i) => (
            <ButtonTab
              active={active}
              onClick={() => setIsActive(item.name)}
              key={i}
            >
              {item.name}
            </ButtonTab>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center space-x-0 space-y-10 min-[550px]:flex-row min-[550px]:justify-between min-[550px]:space-x-20 min-[550px]:space-y-0 ">
          {active === "Konsep" || active === "Denah" ? (
            <div className="flex    flex-col space-y-3 rounded-2xl bg-[#F7F7F7] px-8 py-10">
              <div className="flex w-full flex-col border-b-1 border-gray-200 pb-6">
                <span className="block font-medium">
                  Biaya Konstruksi Mulai Dari
                </span>
                <span className="block text-2xl font-bold text-[#5E8451]">
                  Rp 400.000.000,00
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
          ) : (
            <div className="flex h-[30vh] bg-[#694141]">s</div>
          )}
          <div className=" flex w-[25rem] flex-col   space-y-4  ">
            <h1 className="text-2xl font-semibold text-[#C0702E]">
              Keterangan Gambar{" "}
              {active === "Konsep" || active === "Spesifikasi" ? "" : "Denah"}
            </h1>
            <div className="flex w-full  flex-col bg-[#F7F7F7]">
              <ItemCarousel responsive={responsive}>
                <img
                  src={
                    active === "Konsep" || active === "Spesifikasi"
                      ? item.img
                      : "/img/denah.png"
                  }
                />
              </ItemCarousel>
              <h1 className="py-3 text-center font-semibold text-[#5E8451]">
                {active === "Konsep" && "Desain Ekstrerior"}
                {active === "Denah" && `Denah ${item.title}`}
                {active === "Spesifikasi" && "Spesifikasi Bahan Bangunan"}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
