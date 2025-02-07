import React from "react";
import Image from "next/image";


const Login = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {/* Login Header */}
        <h1 className="text-2xl font-bold text-center mb-4 text-[#000000]">Login</h1>
        <p className="text-[#C2C5E1] text-center mb-6">
          Please login using account details below.
        </p>

        {/* Login Form */}
        <form>
          {/* Email Address */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              aria-label="Email Address"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
              aria-label="Password"
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-6 text-right">
            <a href="#" className="text-sm text-[#C2C5E1] hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-[#FB2E86] text-white text-lg font-semibold py-2 rounded-md hover:bg-pink-600 transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-600 text-sm">
            Don’t have an Account?{" "}
            <a href="#" className="text-[#C2C5E1] font-semibold hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>

      {/* Brand Image */}
      <div className="mt-20 w-full max-w-5xl">
        <Image
          src="/brand.png"
          alt="Brand"
          width={400}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
