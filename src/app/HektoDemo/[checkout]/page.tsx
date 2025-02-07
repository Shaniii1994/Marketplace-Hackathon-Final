import React from "react";
import Image from "next/image";

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <div className="max-w-6xl w-full bg-[#F8F8FD] shadow-md rounded-lg p-8 flex flex-col lg:flex-row gap-8">
        {/* Left Section: Contact Information and Shipping Address */}
        <div className="w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r border-gray-200 pr-0 lg:pr-8">
          <h1 className="text-2xl font-bold mb-6 text-[#1D3178]">Hekto Demo</h1>
          <p className="mb-8 text-[#1D3178]">Cart Information / Shipping / Payment</p>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4 text-[#1D3178]">Contact Information</h2>
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full mb-4 border border-gray-300 rounded-md px-4 py-2"
            />
            <label className="flex items-center text-sm text-[#C1C8E1]">
              <input type="checkbox" className="mr-2 accent-[#19D16F]" />
              Keep me up to date on news and exclusive offers
            </label>
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-[#1D3178]">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name (Optional)"
                className="border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full mb-4 border border-gray-300 rounded-md px-4 py-2"
            />
            <input
              type="text"
              placeholder="Apartment, suite, etc. (Optional)"
              className="w-full mb-4 border border-gray-300 rounded-md px-4 py-2"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded-md px-4 py-2"
              />
              <input
                type="text"
                placeholder="Country/Region"
                className="border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full mb-8 border border-gray-300 rounded-md px-4 py-2"
            />
            <button className="w-full bg-[#FB2E86] text-white text-lg font-semibold py-2 rounded-md">
              Continue to Shipping
            </button>
          </div>
        </div>

        {/* Right Section: Cart Details */}
        <div className="w-full lg:w-1/3">
          {/* Cart Items */}
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={`/hekto${idx + 1}.jpg`}
                  alt={`Product ${idx + 1}`}
                  width={400}
                  height={400}
                  className="w-16 h-16 rounded-md"
                />
                <div>
                  <p className="text-sm font-semibold text-[#000000]">Product Name</p>
                  <p className="text-sm text-[#A1A8C1]">Color: Brown</p>
                  <p className="text-sm text-[#A1A8C1]">Size: XL</p>
                </div>
              </div>
              <p className="text-sm font-semibold">$50.00</p>
            </div>
          ))}

          {/* Summary */}
          <div className="mt-6">
            <div className="flex justify-between text-[#1D3178] mb-2">
              <p>Subtotal:</p>
              <p className="font-semibold">$150.00</p>
            </div>
            <div className="flex justify-between text-[#1D3178] mb-4">
              <p>Total:</p>
              <p className="font-bold text-lg">$200.00</p>
            </div>
            <p className="text-sm text-[#8A91AB]">
              <span className="text-green-500 font-bold">✓</span> Shipping & taxes calculated at
              checkout
            </p>
            <button className="w-full bg-green-500 text-white text-lg font-semibold py-2 mt-4 rounded-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
