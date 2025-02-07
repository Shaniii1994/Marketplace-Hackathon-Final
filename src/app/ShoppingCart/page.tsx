import React from 'react';
import Cartitems from './[cartitems]/page';


const ShoppingCart = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-4 md:px-20 text-center md:text-left">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">
          Shopping Cart
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">Shopping Cart</span>
        </p>
      </div>
      {/* Cart Items */}
      <div className="px-4">
        <Cartitems />
      </div>
    </div>
  );
};

export default ShoppingCart;

