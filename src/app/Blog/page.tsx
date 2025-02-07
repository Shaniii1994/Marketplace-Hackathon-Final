import React from "react";
import Image from "next/image";
import { BsVectorPen } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


const Blog = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-6 md:px-20">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">Blog</h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">Blog</span>
        </p>
    </div>

    <div className="container mx-auto px-4 mt-10 md:px-8">
      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm text-[#8A8FB9] mt-2">
          <span className="flex items-center gap-2">
            <BsVectorPen className="bg-[#FFECE2] text-[#FB2E86] p-1 rounded-full" />
            {'Surf Auxion'}
          </span>
          <span className="flex items-center gap-2">
            <LuCalendarDays className="text-[#FFA454] bg-[#FFECE2] p-1 rounded-full" />
            {'Aug 09 2020'}
          </span>
        </div>
        
          {/* Blog Post 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/blogpage/blogpage1.png"
              alt="Post 1"
              width={800}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#151875] mb-2">
                Mauris et orci non vulputate diam tincidunt nec.
              </h2>
              <p className="text-sm text-[#8A8FB9] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nulla non sapien posuere interdum.
              </p>
              <a href="/" className="text-[#FB2E86] font-semibold hover:underline">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/blogpage/blogpage2.png"
              alt="Post 2"
              width={800}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#151875] mb-2">
                Aenean vitae in aliquam ultrices lectus. Elit.
              </h2>
              <p className="text-sm text-[#8A8FB9] mb-4">
                Suspendisse potenti. In non lacus et turpis fringilla sollicitudin eget in lorem.
              </p>
              <a href="/" className="text-[#FB2E86] font-semibold hover:underline">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/blogpage/blogpage3.png"
              alt="Post 3"
              width={800}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#151875] mb-2">
                Sit nam congue feugiat molestie, mauris amet nisl.
              </h2>
              <p className="text-sm text-[#8A8FB9] mb-4">
                Nullam eget orci at sapien malesuada viverra. Pellentesque habitant morbi tristique senectus et netus.
              </p>
              <a href="/" className="text-[#FB2E86] font-semibold hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Search Box */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-pink-200"
            />
          </div>

          {/* Categories */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#151875] mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white bg-pink-500 rounded hover:underline">Hobbies (14)</a></li>
              <li><a href="/" className="text-[#3F509E] hover:underline">Women (21)</a></li>
              <li><a href="/" className="text-[#3F509E] hover:underline">Fashion (10)</a></li>
              <li><a href="/" className="text-[#3F509E] hover:underline">Technology (7)</a></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#151875] mb-4">Recent Posts</h3>
            <ul className="space-y-4 mb-4">
              <li className="flex items-center">
                <Image
                  src="/blogpage/blogpage4.png"
                  alt="Recent Post 1"
                  width={70}
                  height={51}
                  className="w-[70px] h-[51px] object-cover rounded-md"
                />
                <div className="ml-4">
                  <a href="/" className="text-[#3F509E] block hover:underline">
                  It is a long established fact.
                  </a>
                  <span className="text-sm text-[#8A8FB9]">Aug 09 2020</span>
                </div>
              </li>
            </ul>
            <ul className="space-y-4 mb-4">
            <li className="flex items-center">
                <Image
                  src="/blogpage/blogpage5.png"
                  alt="Recent Post 1"
                  width={70}
                  height={51}
                  className="w-[70px] h-[51px] object-cover rounded-md"
                />
                <div className="ml-4">
                  <a href="/" className="text-[#3F509E] block hover:underline">
                  It is a long established fact.
                  </a>
                  <span className="text-sm text-[#8A8FB9]">Aug 09 2020</span>
                </div>
              </li>
            </ul>
            <ul className="space-y-4 mb-4">
            <li className="flex items-center">
                <Image
                  src="/blogpage/blogpage6.png"
                  alt="Recent Post 1"
                  width={70}
                  height={51}
                  className="w-[70px] h-[51px] object-cover rounded-md"
                />
                <div className="ml-4">
                  <a href="/" className="text-[#3F509E] block hover:underline">
                  It is a long established fact.
                  </a>
                  <span className="text-sm text-[#8A8FB9]">Aug 09 2020</span>
                </div>
              </li>
            </ul>
            <ul className="space-y-4 mb-4">
            <li className="flex items-center">
                <Image
                  src="/blogpage/blogpage7.png"
                  alt="Recent Post 1"
                  width={70}
                  height={51}
                  className="w-[70px] h-[51px] object-cover rounded-md"
                />
                <div className="ml-4">
                  <a href="/" className="text-[#3F509E] block hover:underline">
                  It is a long established fact.
                  </a>
                  <span className="text-sm text-[#8A8FB9]">Aug 09 2020</span>
                </div>
              </li>
            </ul>
          </div>

        {/* Sale Product */}
        <div className="bg-white p-4 rounded-lg shadow-md Flex Flex-col">
            <h3 className="text-lg font-semibold text-[#151875] mb-4">Sale Product</h3>
            <ul className="gap-4">
              <li>
                <Image
                  src="/blogpage/blogpage8.png"
                  alt="Offer Product"
                  width={100}
                  height={100}
                  className=" object-cover rounded-md"
                />
                <h4 className="text-sm text-[#151875] mt-2">Elit ornare in enim mauris.</h4>
                <p className="text-sm text-[#8A8FB9]">Aug 09 2020</p>
              </li>
            </ul>
            <ul className="gap-4">
              <li>
                <Image
                  src="/blogpage/blogpage9.png"
                  alt="Offer Product"
                  width={100}
                  height={100}
                  className=" object-cover rounded-md"
                />
                <h4 className="text-sm text-[#151875] mt-2">Elit ornare in enim mauris.</h4>
                <p className="text-sm text-[#8A8FB9]">Aug 09 2020</p>
              </li>
            </ul>
            <ul className="gap-4">
              <li>
                <Image
                  src="/blogpage/blogpage10.png"
                  alt="Offer Product"
                  width={100}
                  height={100}
                  className=" object-cover rounded-md"
                />
                <h4 className="text-sm text-[#151875] mt-2">Elit ornare in enim mauris.</h4>
                <p className="text-sm text-[#8A8FB9]">Aug 09 2020</p>
              </li>
            </ul>
          </div>
          {/* Offer Product */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#151875] Flex Flex-col mb-4">Offer Product</h3>
            <ul className="gap-4">
              <li>
                <Image
                  src="/blogpage/blogpage11.png"
                  alt="Offer Product"
                  width={100}
                  height={100}
                  className=" object-cover rounded-md"
                />
                <h4 className="text-sm text-[#151875] mt-2">Product Name</h4>
                <p className="text-sm text-[#8A8FB9]">$12.00 - $15.00</p>
              </li>
            </ul>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Image
                  src="/blogpage/blogpage12.png"
                  alt="Offer Product"
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <h4 className="text-sm text-[#151875] mt-2">Product Name</h4>
                <p className="text-sm text-[#8A8FB9]">$12.00 - $15.00</p>
              </li>
            </ul>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Image
                  src="/blogpage/blogpage13.png"
                  alt="Offer Product"
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <h4 className="text-sm text-[#151875] mt-2">Product Name</h4>
                <p className="text-sm text-[#8A8FB9]">$12.00 - $15.00</p>
              </li>
            </ul>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Image
                  src="/blogpage/blogpage14.png"
                  alt="Offer Product"
                  width={100}
                  height={100}
                  className="object-cover rounded-md"
                />
                <h4 className="text-sm text-[#151875] mt-2">Product Name</h4>
                <p className="text-sm text-[#8A8FB9]">$12.00 - $15.00</p>
              </li>
            </ul>
          </div>
           {/* Follow */}
              <div className="mt-20 w-[228px] h-[64px] top-[2060px] left-[1297px] gap-[0px] opacity-[0px]">
                  <h3 className="text-lg font-semibold text-[#151875]">Follow</h3>
                  <div className="flex gap-2 flex-wrap mt-3 underline border bg-white">
                    <a href="/" className="text-lg px-3 py-1 rounded-full text-blue-500"><IoLogoFacebook /></a>
                    <a href="/" className="text-lg px-3 py-1 rounded-full text-[#FB2E86]"><FaInstagram /></a>
                    <a href="/" className="text-lg px-3 py-1 rounded-full text-blue-400"><CiTwitter /></a>
              </div>
              </div>
          
          
                {/* Tags */}
                <div className="mt-20 w-[228px] h-[64px] top-[2060px] left-[1297px] gap-[0px] opacity-[0px]">
                  <h3 className="text-lg font-semibold text-[#151875]">Tags</h3>
                  <div className="flex gap-2 flex-wrap mt-3 underline">
                    <a href="/" className="text-sm px-3 py-1 rounded-full">General</a>
                    <a href="/" className="text-sm px-3 py-1 rounded-full text-[#FB2E86]">Atsanil</a>
                    <a href="/" className="text-sm px-3 py-1 rounded-full">Insas.</a>
                    <a href="/" className="text-sm px-3 py-1 rounded-full">Bibsaas</a>
                    <a href="/" className="text-sm px-3 py-1 rounded-full">Nulla.</a>
               </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        {[1, 2, 3, 4].map((page, index) => (
          <button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              page === 1
                ? "bg-pink-500 text-white"
                : "border border-pink-300 text-pink-500 hover:bg-pink-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>    
      </div>
      </div>
      <div className="rounded mt-20 mb-10 border w-full sm:w-[904px] h-auto sm:h-[93px] mx-auto">
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

export default Blog;
