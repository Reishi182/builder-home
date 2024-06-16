import { useParams } from "react-router-dom";
import { projects, users } from "../../utils/data";
import ProjectCard from "../../components/ProjectCard";

export default function DetailArsitek() {
  const { userId } = useParams();
  const id = parseInt(userId);

  const user = users.find((user) => user.id === id);

  return (
    <>
      {/* firs section */}
      <section className="h-[60vh] bg-[url(/img/alissa.png)] bg-cover bg-center bg-no-repeat " />
      {/* Second section */}
      <section className="bg-[#F4F4F4]  px-14 py-7">
        <h1 className="space-y-4">
          <span className="block text-3xl font-bold text-[#C0702E]">
            {user.name}
          </span>
          <span className="block text-xl font-medium text-[#726C6C]">
            {user.role}
          </span>
          <span className="block   text-lg font-semibold">
            Halo, saya merupakan seorang arsitek yang sudah berpengalaman
            menyelesaikan beberapa project Pembuatan arsitektur rumah. Saat ini,
            saya sudah membuat banyak kebutuhan klien, mulai dari kebutuhan
            arsitektur. Saya siap melayani Anda dengan memberikan hasil yang
            terbaik. Segera konsultasikan kebutuhan Anda!
          </span>
        </h1>
      </section>
      {/* Third */}
      <section className="px-20 py-20">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold text-[#C0702E]">Project</h1>
          <div className="grid grid-cols-1 place-items-center gap-10 min-[410px]:grid-cols-2 sm:gap-24 min-[850px]:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard
                name={project.name}
                key={i}
                id={project.id}
                location={project.location}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Fourth */}
      <section className="px-20 py-20 ">
        <div className="flex flex-col space-y-5">
          <h1 className="text-4xl font-semibold text-[#C0702E]">Detail</h1>
          <div className="flex w-1/2 flex-col justify-between space-y-5 sm:flex-row sm:space-y-0">
            <h1>
              <span className="block text-xl font-bold ">Nomor Handphone</span>
              <span className="flex items-center space-x-3 text-lg">
                <span className="block">+62</span>
                <span className="block">{user.phone}</span>
              </span>
            </h1>
            <h1>
              <span className="block text-xl font-bold ">
                Harga Jasa Mulai Dari :
              </span>
              <span className="block text-lg">Rp 100.000.000,00</span>
            </h1>
          </div>
          <h1>
            <span className="block text-xl font-bold ">Website</span>
            <span className="block text-lg">WWW.WebsiteArch.com</span>
          </h1>
        </div>
        <div className="mt-6 flex justify-center sm:justify-end">
          <div className="flex flex-col space-y-7 border-2 border-[#5E8451] px-10 py-14">
            <h1 className="text-2xl text-[#5E8451]">
              Konsultasi dan Pakai Jasa
            </h1>
            <button className="rounded-lg bg-[#5E8451] px-14 py-2 text-white">
              Tambah Favorit
            </button>
            <a
              href={`https://wa.me/${user.phone}`}
              className="rounded-lg bg-[#5E8451] px-14 py-2 text-center text-white"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
