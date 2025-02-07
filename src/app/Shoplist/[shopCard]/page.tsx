import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Loop through Product Cards */}
      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center w-full h-auto bg-white rounded-lg shadow-md overflow-hidden mb-8"
        >
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <Image
              src={`/Shoplist-images/shoplist${index + 1}.jpg`}
              alt={`Product ${index + 1}`}
              width={400}
              height={400}
              className="object-cover w-full h-48 sm:h-64 md:h-full"
            />
          </div>

          {/* Product Content */}
          <div className="p-6 w-full md:w-2/3">
            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Accumsan tincidunt
            </h2>

            {/* Price Section */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xl text-blue-600 font-bold">$26.00</span>
              <span className="text-gray-500 line-through">$52.00</span>
              <div className="flex space-x-1">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
              </div>
            </div>

            {/* Rating Section */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, starIndex) => (
                  <span key={starIndex}>&#9733;</span> // Star Icon
                ))}
                <span className="text-gray-400">&#9734;</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600">
                &#128722; {/* Cart Icon */}
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600">
                &#9825; {/* Heart Icon */}
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600">
                🔍 {/* Zoom Icon */}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Footer Image */}
      <div className="rounded mt-20 border w-full sm:w-[904px] h-auto sm:h-[93px] mx-auto">
        <Image
          src="/brand.png"
          alt="Brand"
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductCard;
