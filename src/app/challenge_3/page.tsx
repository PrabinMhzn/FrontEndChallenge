import { Button } from "@/components/Button";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-3900 text-white pt-32">
      <h1>challenge 3 -Social Links profile main</h1>
      <div className="flex flex-col bg-gray-3800 h-auto m-4 p-8 items-center justify-center rounded-lg font-inter">
        <img
          src="/images/avatar-jessica.jpeg"
          alt="avatar image"
          className="rounded-full w-16 mb-8"
        />
        <div className="text-center gap-8">
          <h1 className="text-3xl ">Jessica Randall</h1>
          <p className="text-green">London, United Kingdom</p>
        </div>
        <div>
          <p className="my-4">
            &quot;Front-end developer and avid reader.&quot;
          </p>
          <ul className="flex flex-col items-center w-full gap-4 hover:cursor-pointer text-base">
            <li className="w-full">
              <Button label="GitHub" />
            </li>
            <li className="w-full">
              <Button label="Frontend Mentor" />
            </li>
            <li className="w-full">
              <Button label="LinkedIn" />
            </li>
            <li className="w-full">
              <Button label="Twitter" />
            </li>
            <li className="w-full">
              <Button label="Instagram" />
            </li>
          </ul>
        </div>
      </div>

      <div className="text-xs mt-4">
        <p className="text-xs mt-4 text-center ">
          Challenge by&nbsp;
          <span className="text-blue-700 underline ">
            <a
              href="https:/www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
          </span>
          . Coded by&nbsp;
          <span className="text-blue-700 underline">
            <a href="https://'portfolio-prabin-vercel.app">Prabin Maharjan</a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default page;
