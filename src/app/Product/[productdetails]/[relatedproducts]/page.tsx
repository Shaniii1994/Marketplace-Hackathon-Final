"use client"; // Mark this component as a Client Component

import React, { useState } from "react";
import Image from "next/image";

const RelatedProducts = () => {
  const [activeTab, setActiveTab] = useState("description");

  const relatedProducts = [
    {
      id: 1,
      title: "Men’s Fashion Wear",
      price: "$45.00",
      image: "/Sidebar/product5.jpg",
      rating: 4,
    },
    {
      id: 2,
      title: "Women’s Eyelash",
      price: "$30.00",
      image: "/Sidebar/product6.jpg",
      rating: 5,
    },
    {
      id: 3,
      title: "White Dummy Product",
      price: "$25.00",
      image: "/Sidebar/product7.jpg",
      rating: 4,
    },
    {
      id: 4,
      title: "Top Solid Digital Clock",
      price: "$35.00",
      image: "/Sidebar/product8.jpg",
      rating: 5,
    },
  ];

  const tabs = [
    { key: "description", label: "Description" },
    { key: "additional info", label: "Additional Info" },
    { key: "reviews", label: "Reviews" },
    { key: "video", label: "Video" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 mt-8 max-w-7xl mx-auto">
      {/* Tabs Section */}
      <div className="border-b border-gray-200">
        <nav className="flex flex-wrap gap-4 sm:gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-base sm:text-lg font-medium pb-2 ${
                activeTab === tab.key
                  ? "text-[#151875] border-b-2 border-[#151875]"
                  : "text-[#151875] opacity-60 hover:opacity-100 transition-opacity"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6 text-[#151875]">
        {activeTab === "description" && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Various Tempus</h3>
            <p className="mb-4 text-sm sm:text-base lg:text-lg text-[#A9ACC6]">
              Mauris malesuada eros sagittis gravida. Praesent a id sed placerat faucibus.
              Mauris accumsan est ac interdum luctus auctor mi. Vivamus rhoncus quis tortor
              dictum hendrerit. Ut placerat lacus sit amet nunc condimentum. In hendrerit
              luctus rhoncus.
            </p>
            <h3 className="text-lg sm:text-xl font-bold mb-4">More Details</h3>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base lg:text-lg text-[#A9ACC6]">
              <li>
                Mauris eu adipiscing ultrices gravida. Proin sit amet lorem nulla pulvinar
                elit semper hendrerit orci, ut laoreet.
              </li>
              <li>
                Suspendisse dignissim turpis nisl ac tincidunt et amet aliquam adipiscing
                pellentesque.
              </li>
              <li>
                Proin at pulvinar amet scelerisque aliquam quam magna lectus malesuada
                lorem sit.
              </li>
            </ul>
          </div>
        )}
        {activeTab === "additional info" && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Additional Information</h3>
            <p className="text-sm sm:text-base lg:text-lg text-[#A9ACC6]">
              Here goes the additional information content.
            </p>
          </div>
        )}
        {activeTab === "reviews" && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Customer Reviews</h3>
            <p className="text-sm sm:text-base lg:text-lg text-[#A9ACC6]">
              Here goes the reviews content.
            </p>
          </div>
        )}
        {activeTab === "video" && (
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Product Video</h3>
            <p className="text-sm sm:text-base lg:text-lg text-[#A9ACC6]">
              Here goes the video content.
            </p>
          </div>
        )}
      </div>

      {/* Related Products Section */}
      <div className="mt-12 mb-20">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={400}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#151875]">
                {product.title}
              </h3>
              <p className="text-blue-600 font-bold">{product.price}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`h-4 sm:h-5 w-4 sm:w-5 ${
                      index < product.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
