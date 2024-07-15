import React from "react";
import { Link } from "react-router-dom";

export default function ProjectSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-x-10 min-[715px]:flex-row  min-[715px]:justify-between">
      <div className="flex flex-col items-center">
        <div className="space-y-10 border-b-1  border-[#5E8451] py-10">
          <img src="/img/img2.jpg" className="w-[50rem]" />
          <h1 className="text-center text-[1.8rem] font-bold text-[#C0702E]">
            <span className="block">
              Tampilkan Project Kamu kepada dunia dengan
            </span>
            <span>mengunggah file proyek Kamu!</span>
          </h1>
        </div>
        <h1 className="flex w-[40rem] py-10 text-center text-[1.5rem] font-medium">
          Biarkan karya Kamu berbicara dan jadi magnet yang memikat, mengundang
          minat mereka pada layanan yang Kamu tawarkan.
        </h1>
      </div>
      <div className="flex  flex-col items-center justify-center space-y-10 rounded-3xl px-16 py-44 shadow-custom min-[849px]:px-28">
        <h1 className="flex flex-col items-center space-y-3">
          <span className="text-2xl font-bold">You Can Upload a File</span>
          <span className="font-semibold text-[#7D7D7D]">
            Click on the button to upload your project
          </span>
        </h1>
        <Link
          to="upload-proyek"
          className="flex items-center justify-center gap-3 rounded-full bg-[#74916B] px-10 py-7 text-xl text-white"
        >
          Upload Project
        </Link>{" "}
      </div>
    </div>
  );
}
