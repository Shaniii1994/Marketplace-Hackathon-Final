import React from "react";
import Image from "next/image";

const Offers = () => {
  return (
    <div className="relative">
      {/* Background Image Section */}
      <div
        className="w-full h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('bg.png')" }}
      >
        {/* Overlay Content */}
        <div className="flex items-center justify-center w-full h-full bg-gray-50 bg-opacity-50">
          <div className="text-center text-blue-900 px-6 py-8 sm:px-10">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Get Latest Update By Subscribing <br />
              Our Newsletter
            </h2>

            {/* Shop Now Button */}
            <button className="bg-pink-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-pink-600 transition duration-300 shadow-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="my-12"></div>

      {/* Brand Section */}
      <div className="flex flex-wrap justify-center items-center gap-6 px-4">
        <Image
          src="/brand.png"
          alt="Brand"
          width={300}
          height={300}
          className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] object-contain"
        />
      </div>
    </div>
  );
};

export default Offers;
