import Link from "next/link";
import React from "react";
import Image from "next/image";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Top essential Trends in 2021",
      author: "SaberAli",
      date: "21 August, 2021",
      description: "Innovative Designs for Today's World",
      image: "/Products/blog3.png",
    },
    {
      id: 2,
      title: "Top essential Trends in 2022",
      author: "Surfauxion",
      date: "21 August, 2021",
      description: "Innovative Designs for Today's World",
      image: "/Products/blog2.png",
    },
    {
      id: 3,
      title: "Top essential Trends in 2023",
      author: "SaberAli",
      date: "21 August, 2021",
      description: "Innovative Designs for Today's World",
      image: "/Products/blog1.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 hover:text-pink-500 transition-colors">
          Latest Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Blog Image */}
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={400}
                className="object-cover w-full h-[200px] md:h-[300px]"
              />

              {/* Blog Content */}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="mr-6 flex items-center">
                    <i className="fas fa-user text-pink-500 mr-2"></i>
                    {blog.author}
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-calendar-alt text-yellow-500 mr-2"></i>
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 hover:text-pink-500">
                  {blog.title}
                </h3>
                <p className="text-gray-600 hover:text-pink-500 mb-4 text-sm md:text-base">
                  {blog.description}
                </p>
                <Link
                  href="#"
                  className="text-pink-500 font-semibold hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
