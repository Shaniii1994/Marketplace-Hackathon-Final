import React from "react";
import Login from "./[login]/page";

const MyAccount = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-6 md:px-20">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">My Account</h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">My Account</span>
        </p>
      </div>

      {/* Login Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-10">
        <Login />
      </div>
    </div>
  );
};

export default MyAccount;
