import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full bg-white mt-10 mb-20">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-6 md:px-20 text-center md:text-left">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">Contact Us</h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">Contact Us</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-20 mb-20 px-5 space-y-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Information Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#151875]">Information About Us</h2>
            <p className="text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
              imperdiet. Morbi et urna lectus.
            </p>
            <div className="flex space-x-4">
              <div className="w-6 h-6 bg-[#5625DF] rounded-full"></div>
              <div className="w-6 h-6 bg-[#FF27B7] rounded-full"></div>
              <div className="w-6 h-6 bg-[#37DAF3] rounded-full"></div>
            </div>
          </div>

          {/* Contact Way Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#151875]">Contact Way</h2>
            <ul className="space-y-6">
              {[
                {
                  iconColor: "bg-[#5726DF]",
                  text1: "Tel: 877-67-88-99",
                  text2: "E-Mail: shop@store.com",
                },
                {
                  iconColor: "bg-[#FB2E86]",
                  text1: "Support Forum",
                  text2: "For over 24hr",
                },
                {
                  iconColor: "bg-[#FFB265]",
                  text1: "20 Margaret st, London",
                  text2: "Great Britain, 3NM98-LK",
                },
                {
                  iconColor: "bg-[#1BE982]",
                  text1: "Free standard shipping",
                  text2: "on all orders.",
                },
              ].map((contact, index) => (
                <li key={index} className="flex items-center">
                  <div className={`w-[45px] h-[45px] ${contact.iconColor} rounded-full mr-4`}></div>
                  <div>
                    <p className="text-[#8A8FB9]">{contact.text1}</p>
                    <p className="text-[#8A8FB9]">{contact.text2}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Form Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#151875]">Get In Touch</h2>
            <p className="text-[#8A8FB9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus
              imperdiet.
            </p>
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full sm:w-1/2 p-3 border rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full sm:w-1/2 p-3 border rounded-lg"
                />
              </div>
              <textarea
                placeholder="Type Your Message"
                className="w-full p-3 border rounded-lg"
                rows={5}
              ></textarea>
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
              >
                Send Now
              </button>
            </form>
          </div>

          {/* Illustration Section */}
          <div>
            <Image src="/g10.png" alt="Illustration" 
            width={400}
            height={400}
            className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
