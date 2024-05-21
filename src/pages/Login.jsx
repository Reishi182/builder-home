import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useAuthStore } from "../features/Auth/AuthSlice";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useLocalStorage("loginData", {});

  const checked = Boolean(data.email);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",

    defaultValues: {
      email: data.email && "",
      passsword: data.password && "",
      rememberMe: checked,
    },
  });
  const { login } = useAuthStore((state) => state);

  function onSubmit(data) {
    if (data.rememberMe) {
      setData({ email: data.email, password: data.password });
    } else if (!data.rememberMe) {
      window.localStorage.clear();
    }
    navigate("/");
    alert(JSON.stringify(data));
    login();
  }

  return (
    <div className="flex px-12 py-6 min-h-screen">
      <div className="mx-auto w-full flex md:items-start items-center">
        <div className="bg-[url(/img/login.png)] bg-center bg-no-repeat bg-cover flex-1 w-[50%] h-full rounded-xl px-10 py-60 hidden md:flex ">
          <div className="uppercase tracking-wide -space-y-3 relative z-30">
            <h1 className="text-white text-[2rem] tracking-wide">
              <span className="block font-thin">Real Project</span>
            </h1>
            <h1 className="text-white text-[6rem] -space-y-14  font-bold tracking-wider">
              <span className="block">Builder </span>
              <span className="block">Home </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center h-full justify-normal md:justify-center w-full md:w-[50%]  md:pl-40 pl-0 md:pr-10 pr-0">
          <div className="w-full space-y-6 flex items-center flex-col justify-center">
            <div className="space-y-5 w-full text-center md:text-start">
              <button
                onClick={() => navigate("/")}
                className="flex text-2xl items-center gap-3 underline text-[#9B9B9B] "
              >
                <FaArrowLeftLong />
                Kembali
              </button>
              <h1 className="text-2xl">
                <span className="block">Selamat Datang !</span>
              </h1>
              <h1 className="space-y-3">
                <span className="block text-3xl font-bold">Sign In</span>
                <span className="block text-[#7C7C7C] text-xl">
                  Silahkan masukkan email dan password kamu
                </span>
              </h1>
            </div>
            <div className="space-y-5 w-full">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 flex-1"
              >
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
                  <Checkbox
                    label="Remember Me"
                    register={register("rememberMe")}
                  />
                  <Link
                    to="/reset_password/1"
                    className="text-[#2083C6] text-xl"
                  >
                    Lupa Password?
                  </Link>
                </div>
                <button
                  disabled={!isValid}
                  type="submit"
                  className={` ${
                    !isValid
                      ? "bg-[#D3D3D3] text-[#2A8728]"
                      : "bg-[#248043] text-white"
                  } w-full py-5 px-5  rounded-xl text-2xl`}
                >
                  Sign In
                </button>
              </form>
              <div className="flex flex-col justify-center items-center">
                <h1 className="flex justify-center space-x-5 text-xl">
                  <span className="text-[#7D7D7D]">Belum punya akun ?</span>
                  <Link to="/register" className="text-[#164520] font-bold">
                    Sign Up
                  </Link>
                </h1>
              </div>
              <div className="flex items-center">
                <span className="flex-grow border-t-1 border-gray-500"></span>
                <span className="block text-xl mx-4">Or</span>
                <span className="flex-grow border-t-1 border-gray-500"></span>
              </div>
              <button className="py-4 px-5 w-full text-2xl flex items-center font-medium rounded-xl border-[#9B9B9B] border-1">
                <img src="/img/google.png" className="w-10" alt="Google" />
                <span className="flex-1 text-center">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
