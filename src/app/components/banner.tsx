"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setShowButton(true); // Render the button only on the client
  }, []);

  return (
    <div className="relative bg-purple-50 flex flex-col lg:flex-row items-center justify-between px-6 py-10 lg:py-20 lg:px-20 space-y-10 lg:space-y-0">
      {/* Left Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Bulb Image */}
        <Image
          src="/1.png"
          alt="Bulb"
          width={400}
          height={400}
          className="sm:w-60 lg:w-[387px] object-cover"
        />

        {/* Text Section */}
        <div className="max-w-lg text-center lg:text-left">
          <p className="text-pink-500 text-lg font-semibold mb-3">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing elit.
          </p>
          {showButton && (
            <button className="bg-pink-500 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-pink-600 transition">
              Shop Now
            </button>
          )}

          {/* Dots Navigation */}
          <div className="flex justify-center lg:justify-start mt-8 space-x-4">
            <div className="w-3 h-3 rounded-full bg-[#FB2E86]"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative bg-purple-100 rounded-full flex items-center justify-center">
        <div className="absolute top-4 right-4 lg:top-10 lg:right-5 bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
          50% OFF
        </div>
        {/* Chair Image */}
        <Image
          src="/2.png"
          alt="Chair"
          width={400}
          height={400}
          className="sm:w-80 lg:w-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
