import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
export default function Section3() {
  return (
    <section className="-[#FCFCFC]  px-20 py-20 pb-20">
      <div>
        <h1 className="text-[4rem] font-semibold">Testimoni Klien</h1>
      </div>
      <div className="mt-9 flex lg:space-x-24 space-x-0 flex-col lg:flex-row lg:space-y-0 space-y-12 justify-center items-center ">
        <img src="/img/frame.png" className="w-[60rem]" />
        <Card className=" w-[28rem] px-9 py-4">
          <CardHeader className="flex gap-3">
            <Avatar className="h-16 w-16 text-lg" />
            <div className="flex flex-col ">
              <p className="text-2xl font-bold">Park Jeman</p>
              <p className="text-base text-default-500">Client</p>
            </div>
          </CardHeader>
          <CardBody>
            <p className="tracking-wide text-lg">
              Saya sangat terkesan berbelanja di platform marketplace ini.
              Antarmuka yang mudah dipahami membantu saya menemukan produk yang
              dicari dengan lancar. Proses pembayaran yang cepat dan pilihan
              pengiriman fleksibel dapat meningkatkan kenyamanan berbelanja.
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
