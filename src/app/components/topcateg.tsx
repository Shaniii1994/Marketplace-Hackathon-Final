import React from "react";
import Image from "next/image";

export default function TopCategories() {
  return (
    <div className="text-center py-10">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-20">
        Top Categories
      </h2>

      {/* Categories Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {/* Category Item 1 - Active State */}
        <div className="w-56 flex flex-col items-center">
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-gray-50 flex items-center justify-center relative border-4 shadow-2xl shadow-[#9877E7]">
              <Image
                src="/top1.png"
                alt="Mini LCW Chair"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <button className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm">
              View Shop
            </button>
          </div>
          <h3 className="text-lg font-semibold mt-6 text-[#151875]">
            Mini LCW Chair
          </h3>
          <p className="text-[#151875]">$56.00</p>
        </div>

        {/* Category Item 2 */}
        <div className="w-56 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full bg-gray-50 flex items-center justify-center">
            <Image
              src="/3.png"
              alt="Mini LCW Chair"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4 text-[#151875]">
            Mini LCW Chair
          </h3>
          <p className="text-[#151875]">$56.00</p>
        </div>

        {/* Category Item 3 */}
        <div className="w-56 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full bg-gray-50 flex items-center justify-center">
            <Image
              src="/c1.png"
              alt="Mini LCW Chair"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4 text-[#151875]">
            Mini LCW Chair
          </h3>
          <p className="text-[#151875]">$56.00</p>
        </div>

        {/* Category Item 4 */}
        <div className="w-56 flex flex-col items-center">
          <div className="w-40 h-40 rounded-full bg-gray-50 flex items-center justify-center">
            <Image
              src="/top1.png"
              alt="Mini LCW Chair"
              width={200}
              height={200}
              className="w-[28] h-[28] object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold mt-4 text-[#151875]">
            Mini LCW Chair
          </h3>
          <p className="text-[#151875]">$56.00</p>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        <div className="w-3 h-3 rounded-full bg-pink-500"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
}
