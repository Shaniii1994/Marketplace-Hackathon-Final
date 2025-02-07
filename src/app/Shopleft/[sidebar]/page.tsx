import Image from "next/image";
import React from "react";

const SidebarPage = () => {
  return (
    <div className="flex flex-col md:flex-row mt-10 gap-6 max-w-6xl mx-auto px-4">
      {/* Sidebar Section */}
      <aside className="w-full md:w-64 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Filters</h2>

        {/* Product Brand */}
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-[#151875]">Product Brand</h3>
          <ul className="space-y-2">
            {[
              "Coaster Furniture",
              "Fusion Dot High Fashion",
              "Unique Furniture Restor",
              "Dream Furniture Flipping",
              "Young Repurposed",
              "Green DIY Furniture",
            ].map((brand, index) => (
              <li key={index}>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                  <input type="checkbox" className="form-checkbox accent-[#E5E0FC]" />
                  <span>{brand}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Discount Offers */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Discount Offers</h3>
          <ul className="space-y-2">
            {["20% Cashback", "5% Cashback Offer", "25% Discount Offer"].map(
              (offer, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                    <span>{offer}</span>
                  </label>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Rating Items */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Rating Items</h3>
          <ul className="space-y-2">
            {[5, 4, 3, 2, 1].map((stars) => (
              <li key={stars} className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox bg-yellow-300" />
                <div className="flex items-center text-yellow-500">
                  {Array(stars)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  {Array(5 - stars)
                    .fill(0)
                    .map((_, index) => (
                      <span key={index} className="text-gray-300">
                        ★
                      </span>
                    ))}
                </div>
                <span className="text-sm text-gray-500">({stars} stars)</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-[#151875]">Categories</h3>
          <ul className="space-y-2">
            {[
              "Prestashop",
              "Magento",
              "Bigcommerce",
              "osCommerce",
              "3dcart",
              "Bags",
              "Accessories",
              "Jewellery",
              "Watches",
            ].map((category, index) => (
              <li key={index}>
                <label className="flex items-center space-x-2 text-[#7E81A2]">
                  <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                  <span>{category}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Price Filter</h3>
          <ul className="space-y-2">
            {[
              "$0.00 - $150.00",
              "$150.00 - $350.00",
              "$150.00 - $504.00",
              "$450.00 +",
            ].map((priceRange, index) => (
              <li key={index}>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox accent-[#FFDBF1]" />
                  <span>{priceRange}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Filter by Color */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Filter By Color</h3>
          <ul className="flex space-x-2">
            {[
              "bg-blue-500",
              "bg-orange-500",
              "bg-[#FFBF95]",
              "bg-green-500",
              "bg-purple-500",
              "bg-sky-500",
            ].map((color, index) => (
              <li key={index}>
                <span className={`w-5 h-5 ${color} rounded-full`} />
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Product Details Section */}
      <main className="flex-1 bg-white p-6 rounded-lg shadow-md">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div
            key={item}
            className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md overflow-hidden mb-8"
          >
            <div className="w-full md:w-1/3">
              <Image
                src={`/Sidebar/shop${item}.jpg`}
                alt={`Product ${item}`}
                width={400}
                height={400}
                className="object-cover w-full"
              />
            </div>
            <div className="p-6 w-full md:w-2/3">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                Product Title {item}
              </h2>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-xl text-blue-600 font-bold">$26.00</span>
                <span className="text-pink-500 line-through">$52.00</span>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(4)].map((_, starIndex) => (
                  <span key={starIndex}>&#9733;</span>
                ))}
                <span className="text-gray-400">&#9734;</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex space-x-4">
                <button className="p-2 text-gray-600 hover:text-blue-600">
                  &#128722;
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600">
                  &#9825;
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600">
                  🔍
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default SidebarPage;
