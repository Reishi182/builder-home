import { Link, useParams } from "react-router-dom";
import { users } from "../../utils/data";
import UserNotFound from "./UserNotFound";

export default function Consult() {
  const { Id } = useParams();
  const userId = Number(Id);
  const user = users.find((user) => user.id === userId);

  // Jika user tidak ditemukan, Anda bisa mengarahkan ke halaman lain atau menampilkan pesan
  if (!user) {
    return <UserNotFound />;
  }

  const list = [
    "Privasi",
    "Pusat Bantuan",
    "Blog",
    "Untuk Bisnis",
    "Whatsapp",
    "Unduh",
  ];

  return (
    <section className="px-24 py-10 w-full h-[100vh] pb-24">
      <div className="space-y-6">
        <div className="flex md:flex-row items-center justify-between flex-col-reverse">
          <img src="/img/whatsapp.png" className="w-[12rem]" />
          <ul className="flex space-x-12 font-medium text-2xl">
            {list.map((item, i) => (
              <li key={i}>
                <Link>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-20 space-y-9">
          <div>
            <h1 className="font-semibold text-[3rem] sm:text-start text-center text-[#C0702E]">
              Hubungi Kami
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="space-y-28">
              <img src="/img/logo.png" className="w-[30rem]" />
              <h1 className="flex items-center justify-center">
                <span className="inline-block text-center text-xl">
                  {user.name}
                </span>
                <img src="/img/check.png" className="w-[3rem]" />
              </h1>
            </div>
            <a
              href={`https://wa.me/${user.phone}`}
              className="bg-[#075E34] px-5 py-5 w-[14rem] rounded-2xl text-center block text-white"
            >
              Lanjut ke Chat
            </a>
          </div>
          <h1 className="text-2xl sm:text-start text-center">
            Hallo, Saya Tertarik Menggunakan Jasa Builder Home{" "}
          </h1>
        </div>
      </div>
    </section>
  );
}
