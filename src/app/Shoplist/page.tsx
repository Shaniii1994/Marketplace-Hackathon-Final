import React from 'react';
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import ShopCard from "@/app/Shoplist/[shopCard]/page";

const Shoplist = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-4 md:px-20 text-center md:text-left">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">
          Shop List
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">Shop List</span>
        </p>
      </div>

      {/* Title and Description */}
      <div className="p-4 mx-4 bg-white">
        <div className="border-b bg-white pb-4 mb-4 mt-10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Title and Description */}
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-blue-900 text-center md:text-left px-2 md:px-10">
                Ecommerce Accessories & Fashion Item
              </h1>
              <p className="text-gray-600 text-sm mt-1 text-center md:text-left px-2 md:px-10">
                About <span className="font-medium">9,620</span> results (0.62 seconds)
              </p>
            </div>
          </div>

          {/* Controls Section */}
          <div className="flex flex-col sm:flex-row items-start md:items-center gap-4 text-center md:text-left">
            {/* Per Page Input */}
            <div className="flex flex-col sm:flex-row items-center gap-2">
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
            <div className="flex flex-col sm:flex-row items-center gap-2">
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
            <div className="flex items-center gap-2 mx-4 justify-center md:justify-start">
              <label className="text-gray-700 text-sm font-medium">View:</label>
              <div className="flex gap-2">
                <button className="p-2 border rounded hover:bg-blue-100 focus:ring-2 focus:ring-blue-500">
                  <IoGrid className="text-gray-700" />
                </button>
                <button className="p-2 border rounded hover:bg-blue-100 focus:ring-2 focus:ring-blue-500">
                  <FaListUl className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ShopCard />
      </div>
    </div>
  );
};

export default Shoplist;
