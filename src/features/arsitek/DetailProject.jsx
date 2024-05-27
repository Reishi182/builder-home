export default function DetailProject() {
  return (
    <section className="py-10 sm:px-20 px-10 w-full">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-5">
          {" "}
          <h1 className="text-[#C0702E] font-bold text-4xl">Project</h1>
          <img src="/img/House/sectionhs.png" />
        </div>
        <div className="flex flex-col space-y-2">
          {" "}
          <h1 className="text-[#C0702E] font-bold text-4xl">
            Modern House White
          </h1>
          <h1 className="text-[#726C6C] text-xl">Indonesia, Bali | 2015</h1>
          <div className="grid grid-cols-1 min-[200px]:grid-cols-2 md:grid-cols-3 gap-14 pb-20">
            <img src="/img/interior/interior.png" />
            <img src="/img/interior/interior2.png" />
            <img src="/img/interior/interior3.png" />
            <img src="/img/interior/interior4.png" />
            <img src="/img/interior/interior5.png" />
            <img src="/img/interior/interior6.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
