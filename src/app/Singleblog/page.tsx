import React from "react";
import Image from "next/image";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Singleblog = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-6 md:px-20">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">Singleblog</h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">Singleblog</span>
        </p>
    </div>
    
    <div className="container mx-auto px-4 mt-10 md:px-8">

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {/* Blog Posts */}
        <div className="md:col-span-2 space-y-8">
          {/* Blog Post */}
          {[1].map((post, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={`/blogpage/blogpage${post}.jpg`}
                alt={`Blog ${post}`}
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#151875] mb-2">
                Mauris at orci non vulputate diam tincidunt nec. {post}
                </h2>
                <p className="text-sm text-[#8A8FB9] mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec nulla non
                  sapien posuere interdum.
                </p>
                <a href="/" className="text-[#FB2E86] font-semibold hover:underline">
                  Read More
                </a>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#8A8FB9] mb-2">
                <p className="text-sm text-[#8A8FB9] mb-4 leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. 
                Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in 
                arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc. 
                </p>
                </h2>
                </div>
                <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#8A8FB9] mb-2 bg-gray-100">
                <p className="text-sm text-[#8A8FB9] mb-4 leading-tight focus-ring-4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat
                toamk risusu”
                </p>
                </h2>
              </div>
              
            </div>
          ))}

        <div className="bg-white flex flex-col-2 shadow-lg rounded-lg overflow-hidden">
                      <Image
                        src="/singleblog1.jpg"
                        alt="Post 1"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <Image
                        src="/singleblog2.jpg"
                        alt="Post 1"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
        </div>
          
        <div className="bg-white flex flex-col-4 shadow-sm rounded-sm overflow-hidden">
                      <Image
                        src="/singleblog3.jpg"
                        alt="Quam sed"
                        width={250}
                        height={250}
                        className="object-cover"
                      />
                      <Image
                        src="/singleblog4.jpg"
                        alt="Tristique sed"
                        width={250}
                        height={250}
                        className="object-cover"
                      />
                      <div className="bg-white flex flex-col-2 shadow-lg rounded-lg overflow-hidden">
                      <Image
                        src="/singleblog5.jpg"
                        alt="A etiam"
                        width={250}
                        height={250}
                        className="object-cover"
                      />
                      <Image
                        src="/singleblog6.jpg"
                        alt="Mi nisi"
                        width={250}
                        height={250}
                        className="object-cover"
                      />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        
            <aside className="md:w-1/2">
              {/* Search Box */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none"
                />
              </div>
              {/* Categories */}
              <div className="w-[254px] h-[161px] top-[665px] left-[1297px] gap-2 text-[#151875] mb-6">
                <h3 className="text-lg font-semibold text-[#151875]">Categories</h3>
                <ul className="mt-6 grid grid-cols-2 gap-4">
                  <li><a href="/" className="text-white w-[122px] h-[30px] radius-[3px] border rounded bg-[#F939BF]">Hobbies (14)</a></li>
                  <li><a href="/" className="text-[#3F509E]">Women (21)</a></li>
                  <li><a href="/" className="text-[#3F509E]">Women (21)</a></li>
                  <li><a href="/" className="text-[#3F509E]">Women (21)</a></li>
                  <li><a href="/" className="text-[#3F509E]">Women (21)</a></li>
                  <li><a href="/" className="text-[#3F509E]">Women (21)</a></li>
                </ul>
              </div>
              {/* Recent Posts */}
              <div className="w-[250px] h-[270px] top-[922px] left-[1297px] gap-[0px] opacity-[0px] mb-6">
                <h3 className="text-lg font-semibold text-[#151875]">Recent Posts</h3>
                <ul className="mt-6 space-y-2 ">
                  <li className="inline-flex">
                  <Image src="/blogpage/blogpage4.jpg" 
                  alt="title"
                  width={400}
                  height={400}
                  className="w-[70px] h-[51px] gap-[0px] opacity-[0px]"/>
                  <span className="text-[#3F509E] w-[250px] h-[51px] mx-2 top-[922px] left-[1297px] gap-[0px] opacity-[0px]">It is a long established fact</span>
                  <span className="text-[#8A8FB9] w-[174.31px] h-32px] top-[7px] left-[75.69px] gap-[0px] opacity-[0px]">Aug 09 2020</span></li>
                  
                  <li className="inline-flex">
                  <Image src="/blogpage/blogpage5.jpg" 
                  alt="title"
                  width={400}
                  height={400}
                  className="w-[70px] h-[51px] gap-[0px] opacity-[0px]"/>
                  <span className="text-[#3F509E] w-[250px] h-[51px] mx-2 top-[922px] left-[1297px] gap-[0px] opacity-[0px]">It is a long established fact</span>
                  <span className="text-[#8A8FB9] w-[174.31px] h-32px] top-[7px] left-[75.69px] gap-[0px] opacity-[0px]">Aug 09 2020</span></li>
                  
                  <li className="inline-flex">
                  <Image src="/blogpage/blogpage6.jpg" 
                  alt="title"
                  width={400}
                  height={400}
                  className="w-[70px] h-[51px] gap-[0px] opacity-[0px]"/>
                  <span className="text-[#3F509E] w-[250px] h-[51px] mx-2 top-[922px] left-[1297px] gap-[0px] opacity-[0px]">It is a long established fact</span>
                  <span className="text-[#8A8FB9] w-[174.31px] h-32px] top-[7px] left-[75.69px] gap-[0px] opacity-[0px]">Aug 09 2020</span></li>
                  
                  <li className="inline-flex">
                  <Image src="/blogpage/blogpage7.jpg" 
                  alt="title"
                  width={400}
                  height={400}
                  className="w-[70px] h-[51px] gap-[0px] opacity-[0px]"/>
                  <span className="text-[#3F509E] w-[250px] h-[51px] mx-2 top-[922px] left-[1297px] gap-[0px] opacity-[0px]">It is a long established fact</span>
                  <span className="text-[#8A8FB9] w-[174.31px] h-32px] top-[7px] left-[75.69px] gap-[0px] opacity-[0px]">Aug 09 2020</span></li>
                </ul>
              </div>
        
            {/* Sale Product */}
              <div className="w-[250px] h-[270px] top-[922px] left-[1297px] gap-[0px] mt-20 opacity-[0px] mb-6">
                <h3 className="text-lg font-semibold text-[#151875]">Sale Product</h3>
                <ul className="mt-6 space-y-2 ">
                  <li className="inline-flex">
                  <Image src="/blogpage/blogpage8.jpg" 
                  alt="title"
                  width={400}
                  height={400}
                  className="w-[70px] h-[51px] gap-[0px] opacity-[0px]"/>
                  <span className="text-[#3F509E] w-[250px] h-[51px] mx-2 top-[922px] left-[1297px] gap-[0px] opacity-[0px]">Elit ornare in enim mauris.</span>
                  <span className="text-[#8A8FB9] w-[174.31px] h-32px] top-[7px] left-[75.69px] gap-[0px] opacity-[0px]">Aug 09 2020</span></li>
                  
                  <li className="inline-flex">
                  <Image src="/blogpage/blogpage9.jpg" 
                  alt="title"
                  width={400}
                  height={400}
                  className="w-[70px] h-[51px] gap-[0px] opacity-[0px]"/>
                  <span className="text-[#3F509E] w-[250px] h-[51px] mx-2 top-[922px] left-[1297px] gap-[0px] opacity-[0px]">Viverra pulvinar et enim.</span>
                  <span className="text-[#8A8FB9] w-[174.31px] h-32px] top-[7px] left-[75.69px] gap-[0px] opacity-[0px]">Aug 09 2020</span></li>
                  
                  <li className="inline-flex">
                  <Image src="/blogpage/blogpage10.jpg" 
                  alt="title"
                  width={400}
                  height={400}
                  className="w-[70px] h-[80px] gap-[0px] opacity-[0px]"/>
                  <span className="text-[#3F509E] w-[250px] h-[51px] mx-2 top-[922px] left-[1297px] gap-[0px] opacity-[0px]">Mattis varius donec fdsfd</span>
                  <span className="text-[#8A8FB9] w-[174.31px] h-[32px] top-[7px] left-[75.69px] gap-[0px] opacity-[0px]">Aug 09 2020</span></li>
                </ul>
              </div>
        
            {/* Offer Product */}
          <div className="mt-10 mb-6">
          {/* Title */}
          <h3 className="text-lg font-semibold text-[#151875] mb-6">Offer Product</h3>
        
          {/* Product Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
          {/* Product 1 */}
          <li className="text-justify">
          <Image
            src="/blogpage/blogpage11.jpg"
            alt="Duis lectus est."
            width={400}
            height={400}
            className="w-[126px] h-[80px] mx-0 mb-2 object-cover rounded-lg"
          />
          <h4 className="mt-2 text-[#151875] text-lg font-semibold">
            Duis lectus est.
          </h4>
          <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
        </li>
        
        {/* Product 2 */}
        <li className="text-justify">
          <Image
            src="/blogpage/blogpage12.jpg"
            alt="Sed placerat."
            width={400}
            height={400}
            className="w-[126px] h-[80px] mx-0 mb-2 object-cover rounded-lg"
          />
          <h4 className="mt-2 text-[#151875] text-lg font-semibold">
            Sed placerat.
          </h4>
          <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
        </li>
        
        {/* Product 3 */}
        <li className="text-justify">
          <Image
            src="/blogpage/blogpage13.jpg"
            alt="Netus proin."
            width={400}
            height={400}
            className="w-[126px] h-[80px] mx-0 mb-2 object-cover rounded-lg"
          />
          <h4 className="mt-2 text-[#151875] text-lg font-semibold">
            Netus proin.
          </h4>
          <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
        </li>
        
        {/* Product 4 */}
        <li className="text-justify">
          <Image
            src="/blogpage/blogpage14.jpg"
            alt="Platea in."
            width={400}
            height={400}
            className="w-[126px] h-[80px] mx-0 mb-2 object-cover rounded-lg"
          />
          <h4 className="mt-2 text-[#151875] text-lg font-semibold">
            Platea in.
          </h4>
          <p className="text-[#8A8FB9]">$12.00 - $15.00</p>
        </li>
          </ul>
        </div>
        
          {/* Follow Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[#151875] mb-4">Follow</h3>
            <div className="flex flex-col-2 gap-4">
              <a href="/" className="text-xl text-blue-500">
                <IoLogoFacebook />
              </a>
              <a href="/" className="text-xl text-[#FB2E86]">
                <FaInstagram />
              </a>
              <a href="/" className="text-xl text-blue-400">
                <CiTwitter />
              </a>
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
        </aside>
      </div>

      {/* Comments Section */}
      <div className="bg-white p-6 mt-10 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold text-[#151875] mb-4">Comments</h3>
        {[1].map((comment, index) => (
          <div key={index} className="flex items-start space-x-4 mb-4">
            <Image
              src="/singleblog7.jpg"
              alt={`Comment ${index}`}
              width={50}
              height={50}
              className="w-12 h-12 rounded-full object-cover"
            />
        
        <div>
              <h4 className="font-semibold text-[#151875]">Sapien ac Jan 09 2020</h4>
              <p className="text-sm text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                At in vitae rutrum vulputate consectetur.</p>
            </div>
          </div>
        ))}
        <div className="bg-white p-6 mt-8 rounded-lg shadow-lg text-lg font-semibold ">
        {[1].map((comment, index) => (
          <div key={index} className="flex items-start space-x-4 mb-4">
            <Image
              src="/singleblog8.jpg"
              alt={`Comment ${index}`}
              width={50}
              height={50}
              className="w-12 h-12 rounded-full object-cover"
            />
        <div>
              <h4 className="font-semibold text-[#151875]">Augue conva Aug 18 2020</h4>
              <p className="text-sm text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                At in vitae rutrum vulputate consectetur.</p>
            </div>
          </div>
        ))}

        {/* Comment Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-pink-200"
          />
          <textarea
            placeholder="Your Comment"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:ring-pink-200"
          ></textarea>
          <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600">
            Submit Comment
          </button>
        </form>
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

export default Singleblog;
