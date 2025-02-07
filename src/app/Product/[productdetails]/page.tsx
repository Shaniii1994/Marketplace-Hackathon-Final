import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Image from "next/image";


const ProductDetails = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 gap-6 p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto shadow-lg border rounded-md bg-white">
      {/* Left Section: Thumbnails */}
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-scroll md:overflow-visible">
        {["product1.png", "product2.png", "product3.png"].map((img, index) => (
          <Image
            key={index}
            src={`/Sidebar/${img}`}
            alt={`Thumbnail ${index + 1}`}
            width={400}
            height={400}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-cover bg-gray-200 rounded-md hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Main Image Section */}
      <div className="flex-1">
        <Image
          src="/Sidebar/product4.png"
          alt="Main Product"
          width={400}
          height={400}
          className="w-full h-64 sm:h-80 lg:h-[400px] object-cover bg-gray-200 rounded-md"
        />
      </div>

      {/* Right Section: Product Details */}
      <div className="flex-1 space-y-6">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0D134E]">
          Playwood Arm Chair
        </h2>

        {/* Rating */}
        <div className="flex items-center text-yellow-500">
          <span>★★★★☆</span>
          <span className="text-gray-500 ml-2">(22)</span>
        </div>

        {/* Price */}
        <div className="text-base sm:text-lg lg:text-xl font-semibold">
          <span className="text-[#FB2E86]">$32.00</span>{" "}
          <span className="line-through text-gray-500">$52.00</span>
        </div>

        {/* Color */}
        <div>
          <span className="block text-sm sm:text-base font-medium text-[#0D134E]">
            Color
          </span>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          tellus porttitor purus et volutpat sit.
        </p>

        {/* Add to Cart */}
        <div className="flex flex-wrap items-center space-x-4">
          <button className="px-4 sm:px-6 py-2 text-sm sm:text-base bg-[#FB2E86] text-white rounded-md hover:bg-pink-600 transition duration-300">
            Add to Cart
          </button>
          <span className="text-[#FB2E86] text-lg cursor-pointer hover:text-pink-600 transition">
            ♡
          </span>
        </div>

        {/* Meta Info */}
        <div className="space-y-2 text-gray-700 text-sm sm:text-base">
          <p>
            <span className="font-semibold">Categories:</span> Furniture, Chair
          </p>
          <p>
            <span className="font-semibold">Tags:</span> Modern, Wood, Home
          </p>
          <p>
            <span className="font-semibold">Share:</span>
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-blue-500 text-lg sm:text-xl hover:scale-110 transition-transform"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-pink-400 text-lg sm:text-xl hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-blue-400 text-lg sm:text-xl hover:scale-110 transition-transform"
            >
              <FiTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
