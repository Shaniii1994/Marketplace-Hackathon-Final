"use client";
import React from "react";
import Image from "next/image";


const NotFound = () => {
  const handleBackToHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-6 md:px-20">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">
          404 Not Found
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">404 Not Found</span>
        </p>
      </div>

      {/* Page Details */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white px-4">
        <div className="relative w-full max-w-4xl">
          {/* Large "404" Text */}
          <h1 className="text-6xl md:text-9xl font-extrabold text-[#F6F8FF] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            404
          </h1>

          {/* Image and Button */}
          <div className="relative z-10 text-center">
            <Image
              src="/Group 123.png"
              width={400}
              height={400}
              alt="Page Not Found"
              className="mx-auto w-full max-w-md md:max-w-lg"
            />
            <button
              className="mt-10 px-6 py-2 bg-pink-500 text-white font-medium rounded-md hover:bg-pink-600 transition"
              onClick={handleBackToHome}
            >
              Back To Home
            </button>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="rounded mt-10 border mb-20 w-full sm:w-[904px] h-auto sm:h-[93px] mx-auto px-4">
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

export default NotFound;
