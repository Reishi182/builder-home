export default function ProgressTab({ cur }) {
  const texts = [
    "Masukkan akun Email",
    "Masukan Data diri",
    "Masukan Kata sandi",
  ];
  //   const current =
  return (
    <div className="flex mt-5 px-11 py-8 ">
      <h1 className="flex md:space-x-40 space-x-20  ">
        {Array.from({ length: 3 }, (_, i) => (
          <div
            key={i}
            className="text-center flex flex-col justify-between items-center "
          >
            <span
              key={i}
              className={`block w-7  py-1 text-sm text-white rounded-full ${
                i + 1 === cur ? "" : "opacity-30"
              } bg-[#164863]`}
            >
              {i + 1}
            </span>
            <span className="block mt-2  text-gray-500 text-xl">
              {texts[i]}
            </span>
          </div>
        ))}
      </h1>
    </div>
  );
}
