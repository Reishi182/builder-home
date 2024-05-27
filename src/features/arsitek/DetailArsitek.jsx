import { useParams } from "react-router-dom";
import { projects, users } from "../../utils/data";
import ProjectCard from "../../components/ProjectCard";

export default function DetailArsitek() {
  const { userId } = useParams();
  const id = parseInt(userId);

  const user = users.find((user) => user.id === id);

  console.log(user);

  return (
    <>
      {/* firs section */}
      <section className="bg-[url(/img/alissa.png)] h-[60vh] bg-cover bg-center bg-no-repeat " />
      {/* Second section */}
      <section className="bg-[#F4F4F4]  px-14 py-7">
        <h1 className="space-y-4">
          <span className="block text-[#C0702E] text-3xl font-bold">
            {user.name}
          </span>
          <span className="block text-[#726C6C] text-xl font-medium">
            {user.role}
          </span>
          <span className="block   font-semibold text-lg">
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
          <h1 className="text-[#C0702E] font-bold text-4xl">Project</h1>
          <div className="min-[850px]:grid-cols-3 min-[410px]:grid-cols-2 grid-cols-1 grid place-items-center gap-10 sm:gap-24">
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
          <h1 className="text-[#C0702E] font-semibold text-4xl">Detail</h1>
          <div className="flex justify-between w-1/2 flex-col space-y-5 sm:space-y-0 sm:flex-row">
            <h1>
              <span className="block font-bold text-xl ">Nomor Handphone</span>
              <span className="flex text-lg items-center space-x-3">
                <span className="block">+62</span>
                <span className="block">{user.phone}</span>
              </span>
            </h1>
            <h1>
              <span className="block font-bold text-xl ">
                Harga Jasa Mulai Dari :
              </span>
              <span className="block text-lg">Rp 100.000.000,00</span>
            </h1>
          </div>
          <h1>
            <span className="block font-bold text-xl ">Website</span>
            <span className="block text-lg">WWW.WebsiteArch.com</span>
          </h1>
        </div>
        <div className="flex sm:justify-end mt-6 justify-center">
          <div className="border-2 border-[#5E8451] px-10 py-14 flex flex-col space-y-7">
            <h1 className="text-[#5E8451] text-2xl">
              Konsultasi dan Pakai Jasa
            </h1>
            <button className="bg-[#5E8451] px-14 py-2 rounded-lg text-white">
              Tambah Favorit
            </button>
            <a
              href={`https://wa.me/${user.phone}`}
              className="bg-[#5E8451] text-center px-14 py-2 rounded-lg text-white"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
