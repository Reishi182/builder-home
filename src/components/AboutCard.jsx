import React from "react";

export default function AboutCard({ img, title, children }) {
  return (
    <div className="min-[410px]:w-[24rem] w-auto h-auto min-[410px]:h-[30rem] px-8 py-20  rounded-xl shadow-custom ">
      <div className="flex flex-col items-center space-y-5">
        <img src={`/img/${img}.png`} className="w-[5rem]" />
        <span className="block text-[1.5rem] font-bold">{title}</span>
        <p className="text-center font-semibold tracking-wide text-[xl]">
          {children}
        </p>
      </div>
    </div>
  );
}
