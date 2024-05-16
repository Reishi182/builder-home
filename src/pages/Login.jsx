import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    alert(JSON.stringify(data));
  }

  return (
    <div className="flex px-12 py-6">
      <div className="mx-auto w-full flex">
        <div className="bg-[#164520] w-[50%] rounded-xl px-10 py-60 hidden md:block relative">
          <div className="uppercase tracking-wide relative z-10">
            <h1 className="text-white text-[2rem] tracking-wide">
              <span className="block">Real Project</span>
            </h1>
            <h1 className="text-white text-[5rem]  -space-y-10 font-bold tracking-wider">
              <span className="block">Builder </span>
              <span className="block">Home </span>
            </h1>
          </div>
          <div className="w-[40rem] h-[40rem] z-0 bg-[#C5D282] rounded-full absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-[68%]"></div>
        </div>
        <div className="flex flex-col items-center  w-full md:w-[50%] py-20 pl-40 md:pr-10 pr-24 ">
          <div className="w-full space-y-11">
            <div className="space-y-8">
              <h1 className="text-2xl text-center">
                <span className=" block">Selamat Datang !</span>
              </h1>
              <h1 className="space-y-3 text-center">
                <span className="block text-3xl  font-bold">Sign In</span>
                <span className="block text-[#7C7C7C] text-xl">
                  Silahkan masukkan email dan password kamu
                </span>
              </h1>
            </div>
            <div className="space-y-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <Input
                  label="Email"
                  placeholder="Email Kamu"
                  register={register("email", {
                    required: "Email wajib diisi",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Format email tidak valid",
                    },
                  })}
                  error={errors.email}
                />
                <Input
                  label="Kata Sandi"
                  placeholder="Password kamu"
                  register={register("password", {
                    required: "Password wajib diisi",
                  })}
                  error={errors.password}
                />
                <div className="flex justify-between items-center">
                  <Checkbox label="Remember Me" />
                  <Link className="text-[#2083C6] text-xl">
                    Lupa Password?{" "}
                  </Link>
                </div>
                <button className="bg-[#248043] w-full py-5 px-5 text-white rounded-xl text-2xl">
                  Sign In{" "}
                </button>
              </form>
              <div className="flex flex-col justify-center items-center">
                <h1 className="flex  justify-center space-x-5 text-xl">
                  <span className="text-[#7D7D7D]">Belum punya akun ?</span>
                  <Link className="text-[#164520] font-bold">Sign Up</Link>
                </h1>
              </div>
              <div className="flex items-center">
                <span className="flex-grow border-t-1 border-gray-500"></span>
                <span className=" block text-xl mx-4">Or</span>
                <span className="flex-grow border-t-1 border-gray-500"></span>
              </div>
              <button className="py-4 px-5 w-full text-2xl  flex items-center   font-medium rounded-xl border-[#9B9B9B] border-1">
                <img src="/img/google.png" className="w-10" />
                <span className="flex-1 text-center">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
