export default function MyProject() {
  return (
    <div className="py-12 px-24 w-full">
      <h1 className="text-[2.5rem] font-semibold text-[#C0702E]">My Project</h1>
      <div className="flex justify-center items-center flex-col">
        <img src="/img/noProject.png" className="w-[40rem]" />
        <h1 className="text-[#C0702E] text-2xl font-semibold text-pretty">
          Project Kamu Masih Kosong
        </h1>
        <h1 className="font-medium text-xl  text-pretty">
          Ayo Unggah Desain/Proyek Kamu !{" "}
        </h1>
      </div>
      <div className=" flex  sm:justify-end justify-center mt-6  ">
        <div className="py-10 px-5 shadow-custom  flex flex-col items-center rounded-xl space-y-7">
          <h1 className="text-center">
            <span className="block font-semibold text-xl">
              You Can Upload a File
            </span>
            <span className="block">
              Click on the button or drag & drop files here
            </span>
          </h1>
          <button className="bg-[#74916B] px-16 rounded-full text-white py-7">
            Upload Project
          </button>
        </div>
      </div>
    </div>
  );
}
