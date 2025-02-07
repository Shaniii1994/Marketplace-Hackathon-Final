import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Product Cards */}
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="w-full bg-[#F6F7FB] shadow-lg rounded-lg p-4 text-center"
          >
            {/* Product Image */}
            <div className="w-full h-56 flex justify-center items-center mb-4">
              <Image
                src={`/Products/product${(index % 12) + 1}.png`}
                alt={`Product ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Title */}
            <h2 className="text-lg font-semibold text-blue-900 mb-2">
              Vel elit euismod
            </h2>

            {/* Color Options */}
            <div className="flex justify-center gap-2 mb-2">
              <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
              <span className="w-4 h-4 rounded-full bg-pink-500"></span>
              <span className="w-4 h-4 rounded-full bg-purple-500"></span>
            </div>

            {/* Pricing */}
            <div className="flex justify-center items-center gap-2 text-sm">
              <span className="text-gray-500 font-semibold line-through">
                $42.00
              </span>
              <span className="text-pink-600 font-bold">$26.00</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
