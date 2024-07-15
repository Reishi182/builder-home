export default function ServiceSection() {
  return (
    <section className="bg-[url(/img/service.png)]  bg-cover bg-center relative">
      <div className="flex lg:py-0 py-20 sm:px-28 px-10 items-center lg:justify-between justify-center ">
        <div className="space-y-9 ">
          <h1 className="text-[#C0702E] text-[3.5rem] lg:text-start text-center font-semibold">
            <span className="sm:block inline">
              Temukan Ragam Jasa Bikin Rumah{" "}
            </span>
            <span className="inline sm:block">Impian Anda </span>
          </h1>
          <h1 className="text-2xl lg:text-start text-center">
            <span className="inline sm:block ">
              Cari dan temukanlah jasa yang paling cocok dengan keinginan
            </span>
            <span className="inline sm:block">
              dan preferensi rumah impian Anda !
            </span>
          </h1>
          <h1 className="text-2xl lg:text-start text-center">
            <span className="block">Dapatkan sekarang juga!</span>
          </h1>
        </div>
        <img src="/img/rumah.png" className="w-[30%] lg:block hidden" />
      </div>
    </section>
  );
}
