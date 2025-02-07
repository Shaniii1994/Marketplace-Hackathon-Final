"use client";

import React from "react";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-10 px-6 md:px-20 text-center md:text-left">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">FAQ</h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">Faq</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between mt-20 min-h-screen bg-white px-6 md:px-20">
        {/* Left Section */}
        <div className="md:w-1/2 lg:w-1/3 mb-10 md:mb-0">
          <h2 className="text-2xl font-bold text-[#1D3178] mb-6">General Information</h2>
          <div className="space-y-6 text-[#1D3178]">
            {[
              "Eu dictumst cum at sed euismod condimentum?",
              "Magna bibendum est fermentum eros.",
              "Odio muskana hak eris consecien skeleton?",
              "Elit id blandit sabara boi velit gau mara?",
            ].map((question, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium">{question}</h3>
                <p className="text-[#A1ABCC] mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique
                  mollis vitae, consequat gravida sagittis.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 lg:w-1/3 bg-[#F8F8FD] px-8 py-10 shadow-lg rounded-md">
          <h2 className="text-2xl font-bold text-[#1D3178] mb-6">Ask a Question</h2>
          <form className="space-y-10">
            <div>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                placeholder="Your Name*"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                placeholder="Subject*"
              />
            </div>
            <div>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                placeholder="Type Your Message*"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#FB2E86] text-white font-medium rounded-md hover:bg-pink-600 transition"
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>

      {/* Brand Section */}
      <div className="rounded mt-20 border mb-20 w-full sm:w-[904px] h-auto mx-auto">
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

export default FAQ;
