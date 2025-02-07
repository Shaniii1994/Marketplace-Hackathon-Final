import React from "react";
import { LuNotepadText } from "react-icons/lu";
const OrderCompleted = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-white">
      {/* Watch Icon at Top Left */}
      <div className="absolute top-[250px] left-[300px] w-[100px] h-[100px]">
        <div className="flex items-center justify-center w-[70px] h-[70px] mb-4 text-lg bg-blue-50 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center space-y-4">
        <div className="flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-[#101750]">Your Order Is Completed!</h1>
        <p className="text-gray-500 text-center">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <h1>
        <button className="bg-pink-500 text-white font-semibold py-2 px-6 rounded">
          Continue Shopping
        </button></h1>
      </div>

      {/* Notepad Icon at Bottom Right */}
      <div className="absolute bottom-[250px] right-[300px]">
        <div className="flex items-center justify-center w-[50px] h-[50px] bg-pink-50 rounded-full">
        <LuNotepadText className="text-pink-500 text-lg w-[50px] h-[50px] bg-pink-50" />
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
