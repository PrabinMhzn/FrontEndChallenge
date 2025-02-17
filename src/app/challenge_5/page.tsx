import React from "react";
import { IoCartOutline } from "react-icons/io5";

const BoldCart = () => {
  return <IoCartOutline size={24} style={{ strokeWidth: 3 }} />;
};
const Page = () => {
  return (
    <div className="flex bg-cream-5 min-h-screen items-center justify-center p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-xl w-full max-w-lg md:max-w-3xl overflow-hidden">
        <div className="w-full md:w-1/2 h-[350px] md:h-[600px]">
          <img
            src="/images/image-product-desktop.jpg"
            alt="product"
            className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          />
        </div>

        <div className="flex flex-col md:flex-row p-8  w-full md:w-1/2">
          <div>
            <h3 className="uppercase text-DarkGrayBlue-5 font-Montserrat text-md md:my-6 tracking-custom">
              perfume
            </h3>
            <h1 className="text-4xl md:text-5xl font-fraunces font-extrabold my-4 md:mb-8 text-DarkBlue-5">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-DarkGrayBlue-5 text-md md:mb-6 md:text-lg font-montserrat font-medium md:pr-2">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex flex-row gap-8 items-center my-4 md:my-8">
              <p className="text-DarkCyan-5 text-3xl md:text-4xl font-bold font-fraunces">
                $149.99
              </p>
              <p className="line-through text-DarkGrayBlue-5 font-montserrat font-medium text-md">
                $169.99
              </p>
            </div>
            <button className="bg-DarkCyan-5 text-white p-4 rounded-lg w-full font-Montserrat font-medium hover:bg-DarkCyanDark-5 transition duration-300 flex items-center gap-2 justify-center">
              <BoldCart />
              <span className="font-montserrat font-semibold">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
