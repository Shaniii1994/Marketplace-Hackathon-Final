"use client"; 

import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="font-bold text-3xl text-pink-600">
          <Link href="/">Hekto</Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-sm lg:text-base">
          <li className="text-pink-500 underline">
            <Link href="/">Home</Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-1"
            >
              <span>Pages</span>
              <RiArrowDropDownLine
                className={`w-5 h-5 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg w-40 z-50">
                <ul className="text-sm text-gray-700">
                  <li className="hover:bg-gray-100">
                    <Link href="/GridDefault" className="block px-4 py-2">
                      Grid Default
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/Shopleft" className="block px-4 py-2">
                      Shopleft
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/ShoppingCart" className="block px-4 py-2">
                      Shopping Cart
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/Order" className="block px-4 py-2">
                      Order Completed
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/HektoDemo" className="block px-4 py-2">
                      Hekto Demo
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/MyAccount" className="block px-4 py-2">
                      My Account
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/Singleblog" className="block px-4 py-2">
                      Single Blog
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/About" className="block px-4 py-2">
                      About Us
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/404NotFound" className="block px-4 py-2">
                      404 Not Found
                    </Link>
                  </li>
                  <li className="hover:bg-gray-100">
                    <Link href="/FAQ" className="block px-4 py-2">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href="/Product">
            Product</Link>
          </li>
          <li>
            <Link href="/Blog">Blog</Link>
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
          <li>
            <Link href="/Shoplist">Shop</Link>
          </li>
        </ul>

        {/* Search Input */}
        <div className="hidden md:flex items-center space-x-2">
          <input
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-pink-600"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-pink-600 text-white p-2 rounded-md flex items-center">
            <CiSearch size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-pink-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <RiArrowDropDownLine size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-2 text-gray-700 font-medium p-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/About">About Us</Link>
            </li>
            <li>
              <Link href="/Shopleft">Shopleft</Link>
            </li>
            <li>
              <Link href="/GridDefault">Grid Default</Link>
            </li>
            <li>
              <Link href="/Products/slug">Products</Link>
            </li>
            <li>
              <Link href="/Blog">Blog</Link>
            </li>
            <li>
              <Link href="/Singleblog">Single Blog</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
            <li>
              <Link href="/Shoplist">Shop</Link>
            </li>
            <li>
              <Link href="/ShoppingCart">Shopping Cart</Link>
            </li>
            <li>
              <Link href="/HektoDemo">Hekto Demo</Link>
            </li>
            <li>
              <Link href="/404NotFound">404NotFound</Link>
            </li>
            <li>
              <Link href="/FAQ">FAQ</Link>
            </li>
          </ul>

          {/* Mobile Search */}
          <div className="p-4 flex items-center space-x-2">
            <input
              className="border border-gray-300 rounded-md px-3 py-1 w-full focus:outline-pink-600"
              type="text"
              placeholder="Search..."
            />
            <button className="bg-pink-600 text-white p-2 rounded-md">
              <CiSearch size={20} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
