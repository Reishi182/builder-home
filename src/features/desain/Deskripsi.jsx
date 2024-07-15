export default function Deskripsi({ item }) {
  return (
    <div className="min-[810px]:y-0 flex flex-col items-center justify-center space-x-0 space-y-10 border-b-2 border-gray-200  px-10 py-10 min-[810px]:items-start min-[810px]:space-x-20 min-[810px]:px-28 min-[860px]:flex-row">
      <img src={item.image_cover} className="w-[40rem]" />
      <h1 className="space-y-5">
        <span className="block text-3xl font-semibold text-[#C0702E]">
          Deskripsi
        </span>
        <p className="text-justify text-lg">
          {item.description
            ? item.description
            : `Rumah Korea Modern: Elegansi Tradisional dengan Sentuhan Kontemporer
          Rumah Korea modern menggabungkan keindahan tradisional Korea dengan
          elemen kontemporer yang menawan. Desain arsitektur rumah ini
          menonjolkan atap bumbung melengkung khas Korea yang memberikan kesan
          elegan dan unik. Fasad rumah didominasi oleh kombinasi material alami
          seperti kayu dan batu, menciptakan harmoni antara alam dan struktur
          bangunan. Pintu masuk utama rumah diperindah dengan desain pintu
          tradisional Korea yang disebut munin atau gerbang pintu, seringkali
          dihiasi dengan ukiran artistik yang menggambarkan kekayaan budaya
          Korea. Ruang terbuka di sekitar rumah memberikan kesempatan bagi sinar
          matahari dan aliran udara segar untuk memasuki ruang dalam,
          menciptakan suasana yang nyaman dan terhubung dengan alam sekitar.`}
        </p>
      </h1>
    </div>
  );
}
