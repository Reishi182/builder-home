import { Link } from "react-router-dom";

export default function ArticleCard() {
  return (
    <div className="bg-white rounded-xl shadow-custom px-6 py-6 w-[50rem]">
      <div className="flex space-x-10 justify-center items-center">
        <div>
          <img src="/img/arsitek.png" width={400} />
        </div>
        <div>
          <h1 className="space-y-5">
            <span className="block text-4xl font-semibold">
              Peran Arsitek dalam Estetika Bangunan{" "}
            </span>
            <span className="text-justify block font-medium">
              Dalam setiap proses pembangunan, arsitek berperan dalam proses
              perancangan sampai dengan hal-hal mendetail seperti interior dalam
              rumah. Arsitek yang handal...
            </span>
            <Link className="block border-1 w-52 px-3 py-2 border-[#00528E] text-[#00528E] font-semibold rounded-lg ">
              Baca Selengkapnya
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
