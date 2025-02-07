import React from "react";
import Image from "next/image";



const About = () => {
  return (
    <div className="w-full bg-white mt-10">
      {/* Header Section */}
      <div className="w-full bg-[#F6F5FF] py-8 px-6 md:px-20">
        <h2 className="text-[#101750] text-2xl md:text-4xl font-bold">About Us</h2>
        <p className="text-sm text-gray-500 mt-2">
          Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{" "}
          <span className="text-[#FB2E86] font-medium">About Us</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto p-5 mt-20 space-y-16">
        {/* About Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <Image
            src="/about1.jpg"
            alt="About"
            width={400}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#151875]">
              Know About Our Ecommerce Business, History
            </h2>
            <p className="text-[#8A8FB9] mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
              aliquam, malesuada diam sit. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
              Contact us
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-[#151875]">Our Features</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Free Delivery", icon: "/offer1.png" },
              { title: "100% Cash Back", icon: "/offer2.png" },
              { title: "Quality Product", icon: "/offer3.png" },
              { title: "24/7 Support", icon: "/offer4.png" },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center space-y-4"
              >
                <Image src={feature.icon} 
                alt={feature.title}
                width={400}
                height={400} 
                className="w-16 h-16 mx-auto" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-[#1A0B5B4D]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-[#F6F5FF] py-10">
          <h2 className="text-3xl font-bold text-center text-[#000000]">Our Client Say!</h2>
          <div className="mt-8">
            <div className="flex items-center justify-center space-x-6">
              {["/about2.jpg", "/about3.jpg", "/about4.jpg"].map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Client ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-16 h-16 rounded-full object-cover border-4 border-pink-500"
                />
              ))}
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-[#151875]">Selina Gomez</h3>
              <p className="text-[#8A8FB9]">CEO / Writer</p>
              <p className="text-[#8A8FB9] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel
                dui sollicitudin aliquet id arcu.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 py-10">
            <div className="w-6 h-1 bg-pink-300 rounded-full"></div>
            <div className="w-8 h-1 bg-pink-500 rounded-full"></div>
            <div className="w-6 h-1 bg-pink-300 rounded-full"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
