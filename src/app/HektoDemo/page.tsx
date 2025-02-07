import React from "react";
import CheckoutPage from "./[checkout]/page";

const HektoDemo = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-6 md:px-20 text-center md:text-left">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">
          Hekto Demo
        </h2>
      </div>

      {/* Checkout Page */}
      <div className="px-6 md:px-20">
        <CheckoutPage />
      </div>
    </div>
  );
};

export default HektoDemo;
