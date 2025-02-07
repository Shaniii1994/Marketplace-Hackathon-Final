import React from "react";
import OrderCompleted from "./[ordercompleted]/page";
import Image from "next/image";
const Order = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-6 md:px-20">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">
          Order Completed
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">Order Completed</span>
        </p>
      </div>

      {/* Order Completed Component */}
      <OrderCompleted />

      {/* Brand Section */}
      <div className="rounded mt-10 mb-20 border w-full sm:w-[904px] h-auto sm:h-[93px] mx-auto">
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

export default Order;
