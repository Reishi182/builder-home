import { Accordion, AccordionItem } from "@nextui-org/react";
import AboutCard from "./../components/AboutCard";
import ButtonLink from "./../components/ButtonLink";

export default function About() {
  const cards = [
    {
      img: "icon/star",
      title: "Keahlian Profesional",
      text: "Memiliki keahlian dan pengalaman dalam merancang dan membangun rumah, sehingga dapat memberikan hasil yang berkualitas dan sesuai dengan standar.",
    },
    {
      img: "icon/wand",
      title: "Kemudahan Proses",
      text: "Menggunakan jasa Builder Home, Anda dapat menghindari ribetnya proses perencanaan dan konstruksi rumah karena mereka akan mengelola semua tahap tersebut.",
    },
    {
      img: "icon/torch",
      title: "Desain yang Sesuai",
      text: "Membantu  dalam merancang desain rumah yang sesuai dengan kebutuhan dan gaya hidup Anda, serta memberikan saran-saran yang berguna berdasarkan pengalaman yang profesional.",
    },
  ];
  const accord = [
    {
      title: "1. Apa itu Builder Home ?",
      text: "Builder home adalah perusahaan atau layanan yang menyediakan jasa menyediakan jasa layanan konsultasi, perencanaan desain, pemilihan material, manajemen proyek, serta pemeliharaan dan perbaikan purna jual setelah pembangunan selesai. Mereka memiliki tim profesional yang terdiri dari arsitek, insinyur, tukang bangunan, dan pekerja konstruksi lainnya yang bekerja sama .",
    },
    {
      title: "2. Bagaimana kerja Builder Home ?",
      text: "Builder home adalah perusahaan atau layanan yang menyediakan jasa menyediakan jasa layanan konsultasi, perencanaan desain, pemilihan material, manajemen proyek, serta pemeliharaan dan perbaikan purna jual setelah pembangunan selesai. Mereka memiliki tim profesional yang terdiri dari arsitek, insinyur, tukang bangunan, dan pekerja konstruksi lainnya yang bekerja sama .",
    },
    {
      title: "3. Apakah terdapat layanan konsultasi ?",
      text: "Builder home adalah perusahaan atau layanan yang menyediakan jasa menyediakan jasa layanan konsultasi, perencanaan desain, pemilihan material, manajemen proyek, serta pemeliharaan dan perbaikan purna jual setelah pembangunan selesai. Mereka memiliki tim profesional yang terdiri dari arsitek, insinyur, tukang bangunan, dan pekerja konstruksi lainnya yang bekerja sama .",
    },
  ];

  return (
    <>
      <section className="relative bg-[url(/img/service.png)] bg-cover bg-center py-24">
        <div className="flex items-center  justify-center px-28 lg:justify-between lg:py-0 ">
          <div className="space-y-12">
            <h1 className="text-center text-[3.5rem] font-semibold text-[#C0702E] lg:text-start">
              <span className="inline sm:block">
                Selamat Datang di Builder{" "}
              </span>
              <span className="inline sm:block">Home </span>
            </h1>
            <h1 className="text-center text-2xl lg:text-start">
              <span className="inline sm:block ">
                Setiap orang memiliki hak untuk memiliki rumah impian, untuk itu
                wujudkan{" "}
              </span>
              <span className="inline sm:block">
                impian rumah Anda bersama Builder Home.{" "}
              </span>
            </h1>
            <h1 className="text-center text-2xl lg:text-start">
              <span className="block">Dapatkan Jasa Kami Segera !</span>
            </h1>
          </div>
          <img src="/img/about.png" className="hidden w-[30%] lg:block" />
        </div>
      </section>
      <section className=" px-20 py-20">
        <div className="space-y-20">
          <div className="flex flex-col items-center">
            <h1 className="text-[2rem] font-medium text-[#C0702E]">
              Mengapa Memilih Jasa Builder Home Hal Yang Tepat ?{" "}
            </h1>
          </div>
          <div className="grid grid-cols-1 place-items-center gap-10 space-y-5 min-[410px]:grid-cols-2 md:grid-cols-3 md:space-y-0">
            {cards.map((item, i) => (
              <AboutCard key={i} title={item.title} img={item.img}>
                {item.text}
              </AboutCard>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-gray-50  px-20 py-10">
        <div className="flex flex-col">
          <h1 className="space-y-10 ">
            <span className="block text-[2rem] font-bold text-[#C0702E]">
              Apa yang dapat kami bantu?
            </span>
            <span className="text-xl">
              Jika kamu memiliki pertanyaan yang belum terjawab, silahkan
              kirimkan pesan ke kami
              <span className="inline sm:block">
                melalui tombol Hubungi Kami di sudut kanan bawah layar.
              </span>
            </span>
          </h1>
          <div className="flex items-center  justify-between space-x-7">
            <div className="w-[70%]">
              <Accordion variant="light">
                {accord.map((item, i) => (
                  <AccordionItem
                    key={i}
                    title={item.title}
                    className="text-justify"
                  >
                    {item.text}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex flex-col items-center">
              <img src="/img/worker.png" className="w-[20rem]" />
              <ButtonLink>Hubungi Kami</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
