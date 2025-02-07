import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#E7E4F8]">
        <div className="container px-5 py-24 mx-auto mt-10">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* First Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 lg:mb-0">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Hekto
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-full xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <input
                    type="text"
                    id="footer-field"
                    placeholder="Enter Email Address"
                    name="footer-field"
                    className="w-[100px] mt-2 h-full bg-white bg-opacity py-2 px-4 rounded border inline-flex border-gray-300 focus:bg-transparent focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 text-sm outline-none text-gray-700 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#FB2E86] border-0 py-2 px-6 focus:outline-none rounded">
                  Sign-Up
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Contact Info
                <br />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Categories Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 lg:mb-0">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10 space-y-2">
                {[
                  "Laptops & Computers",
                  "Cameras & Photography",
                  "Smart Phones & Tablets",
                  "Video Games & Consoles",
                  "Waterproof Headphones",
                ].map((category, index) => (
                  <li key={index}>
                    <a className="text-gray-600 hover:text-gray-800">{category}</a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Customer Care Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 lg:mb-0">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Customer Care
              </h2>
              <nav className="list-none mb-10 space-y-2">
                {[
                  "My Account",
                  "Discount",
                  "Returns",
                  "Orders History",
                  "Order Tracking",
                ].map((item, index) => (
                  <li key={index}>
                    <a className="text-gray-600 hover:text-gray-800">{item}</a>
                  </li>
                ))}
              </nav>
            </div>

            {/* Pages Section */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10 space-y-2">
                {[
                  "Blog",
                  "Browse the Shop",
                  "Category",
                  "Pre-Built Pages",
                  "Visual Composer Elements",
                  "WooCommerce Pages",
                ].map((page, index) => (
                  <li key={index}>
                    <a className="text-gray-600 hover:text-gray-800">{page}</a>
                  </li>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-purple-200 py-4">
          <div className="container px-5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 text-center md:text-left mb-2 md:mb-0">
              &copy; Shanyal. All Rights Reserved
            </p>
            <div className="flex justify-center md:justify-end space-x-4">
              <Link
                target="blank"
                href="https://www.facebook.com/shanyal.siddiqui.3"
                className="text-gray-900"
              >
                <FaFacebook className="text-3xl" />
              </Link>
              <Link
                target="blank"
                href="https://www.instagram.com/ishaniisid/"
                className="text-gray-900"
              >
                <FaInstagram className="text-3xl" />
              </Link>
              <Link
                target="blank"
                href="https://www.linkedin.com/in/shanyal-siddiqui-487ba6301/"
                className="text-gray-900"
              >
                <FaLinkedin className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
