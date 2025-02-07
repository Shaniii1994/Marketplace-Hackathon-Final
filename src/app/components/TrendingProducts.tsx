import React from "react";
import Image from "next/image";

const TrendingProducts: React.FC = () => {
  const products = [
    { id: 1, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/c1.png" },
    { id: 2, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/c2.png" },
    { id: 3, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/c3.png" },
    { id: 4, name: "Cantilever Chair", price: "$26.00", oldPrice: "$42.00", image: "/11.png" },
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 hover:text-pink-500 transition-colors">
          Trending Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-6 shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover rounded-md mb-4"
              />
              <h3 className="font-medium text-lg text-gray-800 text-center">{product.name}</h3>
              <p className="text-gray-500 text-center">
                <span className="text-pink-500 font-semibold">{product.price}</span>{" "}
                <span className="line-through text-gray-400">{product.oldPrice}</span>
              </p>
            </div>
          ))}
        </div>      
      </div>
    </div>
  );
};

export default TrendingProducts;
