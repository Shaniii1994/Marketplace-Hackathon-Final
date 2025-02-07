"Use Client";
import React from "react";
import Image from "next/image";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import SidebarPage from "@/app/Shopleft/[sidebar]/page";

const Shopleft = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-6 sm:px-10 md:px-20">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">
          Shop Left Sidebar
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">Shop Left Sidebar</span>
        </p>
      </div>

      {/* Title and Description */}
      <div className="p-4 mx-4 bg-white">
        <div className="border-b bg-white pb-4 mb-4 mt-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Title and Description */}
          <div>
            <h1 className="text-lg md:text-xl font-semibold text-blue-900 px-6 md:px-10">
              Ecommerce Accessories & Fashion Items
            </h1>
            <p className="text-gray-600 text-sm mt-1 px-6 md:px-10">
              About <span className="font-medium">9,620</span> results (0.62 seconds)
            </p>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row items-start md:items-center gap-4">
            {/* Per Page Input */}
            <div className="flex items-center gap-2">
              <label htmlFor="perPage" className="text-gray-700 text-sm font-medium">
                Per Page:
              </label>
              <input
                id="perPage"
                type="number"
                placeholder="10"
                className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sort By Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sortBy" className="text-gray-700 text-sm font-medium">
                Sort By:
              </label>
              <select
                id="sortBy"
                className="px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>

            {/* View Options */}
            <div className="flex items-center gap-2 mx-4">
              <label className="text-gray-700 text-sm font-medium">View:</label>
              <div className="flex gap-2">
                <button
                  className="p-2 border rounded hover:bg-blue-100 focus:ring-2 focus:ring-blue-500"
                  aria-label="Grid View"
                >
                  <IoGrid className="text-gray-700" />
                </button>
                <button
                  className="p-2 border rounded hover:bg-blue-100 focus:ring-2 focus:ring-blue-500"
                  aria-label="List View"
                >
                  <FaListUl className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SidebarPage />

      {/* Brand Section */}
      <div className="rounded mt-20 border w-full sm:w-[904px] h-auto sm:h-[93px] mx-auto">
        <Image
          src="/brand.png"
          alt="Brand Logo"
          width={400}
          height={400}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Shopleft;
