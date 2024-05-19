import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ResetPassword() {
  const navigate = useNavigate();
  const state = useParams();
  const step = Number(state.step);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  function onSubmit(data) {
    alert(JSON.stringify(data));
  }

  return (
    <div className="flex px-12 py-6 h-screen">
      <div className="mx-auto w-full flex md:items-start items-center">
        <div className="bg-[#5E8451] w-[50%] h-full rounded-xl  px-10 py-60 hidden md:flex  relative">
          <div className="uppercase tracking-wide -space-y-3 relative z-30">
            <h1 className="text-white text-[2rem] tracking-wide">
              <span className="block font-thin">Real Project</span>
            </h1>
            <h1 className="text-white text-[6rem] -space-y-14  font-bold tracking-wider">
              <span className="block">Builder </span>
              <span className="block">Home </span>
            </h1>
          </div>
          <div className="absolute w-[41rem] h-[41rem] z-0 bg-[#C5D282] rounded-full -translate-x-1/2 -translate-y-1/2 top-[60%] left-[69%]"></div>
          <img
            src="/img/person.png"
            className="absolute w-[41rem] h-[48rem] z-10 -translate-x-1/2 -translate-y-1/2 top-[61%] left-[83%]"
            alt="Person"
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full w-full md:w-[50%]  md:pl-40 pl-0 md:pr-10 pr-0">
          <div className="w-full space-y-6 flex items-center  flex-col justify-center">
            <div className="space-y-8 w-full text-center md:text-start">
              <button
                onClick={() => navigate(-1)}
                className="flex text-2xl items-center gap-3 underline -mb-5 text-[#9B9B9B] "
              >
                <FaArrowLeftLong />
                Kembali
              </button>

              <h1 className="text-2xl">
                <span className="block">
                  {step === 1 ? "Oops!" : "Cek Email Kamu"}
                </span>
              </h1>
              <h1 className="space-y-3">
                <span className="block text-3xl font-bold">
                  {step === 1 ? "Reset Password" : "OTP Code"}
                </span>
                <span className="block text-[#7C7C7C] text-xl">
                  {step === 1
                    ? "Masukkan Alamat email kamu"
                    : "Silahkan masukkan kode OTP yang telah kami kirimkan"}
                </span>
              </h1>
            </div>
            <div className="space-y-5 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && (
                  <>
                    <Input
                      label="Email"
                      placeholder="Email Kamu"
                      register={register("email", {
                        required: "Email wajib diisi",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Format email tidak valid",
                        },
                      })}
                      error={errors.email}
                    />

                    <button
                      disabled={!isValid}
                      type="button"
                      onClick={() => navigate(`/reset_password/${step + 1}`)}
                      className={` ${
                        !isValid
                          ? "bg-[#D3D3D3] text-[#2A8728]"
                          : "bg-[#248043] text-white"
                      } w-full py-5 px-5  rounded-xl text-2xl`}
                    >
                      Confirm
                    </button>
                  </>
                )}
                {step === 2 && (
                  <>
                    <Input
                      label="OTP"
                      placeholder="Masukkan kode OTP"
                      maxLength={6}
                      register={register("otp", {
                        required: "OTP Code wajib diisi",
                        minLength: {
                          value: 6,
                          message: "OTP harus terdiri dari 6 karakter",
                        },
                        maxLength: {
                          value: 6,
                          message: "OTP harus terdiri dari 6 karakter",
                        },
                      })}
                      error={errors.otp}
                    />
                    <button
                      disabled={!isValid}
                      type="submit"
                      className={` ${
                        !isValid
                          ? "bg-[#D3D3D3] text-[#2A8728]"
                          : "bg-[#248043] text-white"
                      } w-full py-5 px-5  rounded-xl text-2xl`}
                    >
                      Confirm
                    </button>
                  </>
                )}
              </form>
              <div className="flex flex-col justify-center items-center">
                <h1 className="flex justify-center space-x-5 text-xl">
                  <span className="text-[#7D7D7D]">Ingat akun kamu?</span>
                  <Link to="/login" className="text-[#164520] font-bold">
                    Sign In
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
