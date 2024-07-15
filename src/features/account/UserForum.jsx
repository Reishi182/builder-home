import ButtonLink from "../../components/ButtonLink";

export default function UserForum() {
  return (
    <div className="w-full px-24 pb-10 ">
      <div className="space-y-10">
        <h1 className="text-[2rem] font-semibold text-[#C0702E]">
          <span className="block">Forum Komunitas</span>
          <span>Builder Home</span>
        </h1>
        <h1 className="space-y-6 text-xl">
          <span className="block">
            Di sini, Kamu dapat terhubung dengan sesama penggemar desain rumah
            dan bangunan. Bagikan pengalaman, ide, dan inspirasi Anda, serta
            dapatkan saran dan solusi dari para ahli dan anggota lainnya.
          </span>
          <span className="block">
            Forum ini adalah tempat yang sempurna untuk berdiskusi tentang
            proyek rumah, tren arsitektur terbaru, tips renovasi, dan berbagai
            topik menarik lainnya.
          </span>
        </h1>
        <div className="flex items-center justify-center">
          <img src="/img/img1.png" className="w-[300px]" />
        </div>
        <h1 className="text-xl ">
          <p>
            Bergabunglah dengan komunitas kami, temukan jawaban atas pertanyaan
            Anda, dan jadilah bagian dari jaringan yang mendukung dalam
            mewujudkan rumah impian Anda."
          </p>
        </h1>
        <div className="w-[10rem]">
          <ButtonLink>Join Forum</ButtonLink>
        </div>
      </div>
    </div>
  );
}
