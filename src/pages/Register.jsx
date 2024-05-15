import { Link } from "react-router-dom";
import ProgressTab from "../components/ProgressTab";
import { useState } from "react";

export default function Register() {
  const [cur, setCur] = useState(1);
  console.log(cur);
  function nextStep() {
    if (cur > 2) return;
    setCur((s) => s + 1);
  }

  return (
    <div className="h-screen flex flex-col  justify-center items-center  ">
      <div className="">
        <h1 className="text-[#164863]   text-center tracking-wide">
          <span className="block text-4xl  font-bold">Daftar Akun</span>
          <span className="block text-lg">
            Jika Sudah punya akun?{" "}
            <Link className="underline font-medium" to="/login">
              Masuk
            </Link>
          </span>
        </h1>
        <div>
          <ProgressTab cur={cur} />
        </div>
        <div className="flex flex-col space-y-5  py-8">
          <label className="text-xl">Masukkan email anda</label>
          <input className="px-2 py-5 border-1 rounded-xl border-gray-300" />
        </div>
        <div className="flex flex-col mt-4">
          <button
            onClick={nextStep}
            className=" rounded-full bg-[#95B26F] py-4 text-white text-xl "
          >
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
}
