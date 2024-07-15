export default function HzLayout() {
  return (
    <div className="hidden h-full w-[50%] rounded-xl  bg-[url(/img/login.png)] bg-cover bg-center  bg-no-repeat px-10 py-60 md:flex  ">
      <div className="relative z-30 -space-y-3 uppercase tracking-wide">
        <h1 className="text-[2.5rem] tracking-wide text-white">
          <span className="block  font-thin">Real Project</span>
        </h1>
        <h1 className="relative -space-y-14 text-[6rem] font-bold  tracking-wider text-white">
          <span className="block">Builder </span>
          <span className="block">Home </span>
          <span className="font-yesteryear absolute right-2 top-48 block text-[6rem] font-medium capitalize text-[#235922]">
            Trusted
          </span>
        </h1>
      </div>
    </div>
  );
}
