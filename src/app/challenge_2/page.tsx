import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center  pt-32 bg-customyellow font-figtree">
      <div className="flex flex-col bg-white h-auto m-4 rounded-2xl border-black border-2 [box-shadow:4px_4px_0px_0px]  p-6 max-w-sm ">
        <img
          src="/images/illustration-article.svg"
          alt="illustration"
          className="rounded-lg mb-8"
        />
        <div className="bg-customyellow px-4 py-1 rounded-md w-fit font-bold">
          Learning
        </div>

        <p className="my-4">Published 21 Dec 2023</p>
        <h1 className="font-bold text-2xl hover:text-customyellow transition duration-300 hover:cursor-pointer">
          HTML & CSS foundations&nbsp;
        </h1>
        <p className="my-4 text-gray-light">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex flex-row items-center gap-2 ">
          <img src="/images/image-avatar.webp" alt="" className="w-8 h-8" />
          <p className="font-semibold"> Greg Hooper</p>
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
