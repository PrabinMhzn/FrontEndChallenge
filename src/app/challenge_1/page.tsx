import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-300 h-screen ">
      <div className="container w-[400px] bg-white p-[1.5rem] rounded-xl items-center justify-center bg-[2rem] ">
        <img
          src="/images/image-qr-code.png"
          alt="QR Code"
          className="rounded-xl mb-4 "
        />

        <h1 className=" text-3xl font-bold text-slate-900 text-center mb-4">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-slate-500 text-center px-4 font-">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
      <p className="text-xs mt-4 text-center ">
        Challenge by{" "}
        <span className="text-blue-700 underline ">
          <a href="https:/www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
        </span>
        . Coded by{" "}
        <span className="text-blue-700 underline">
          <a href="https://'portfolio-prabin-vercel.app">Prabin Maharjan</a>
        </span>
        .
      </p>
    </div>
  );
};

export default page;
