import React from "react";
import Image from "next/image";

const Cartitems = () => {
  const cartItems = [
    {
      id: 1,
      name: "Ut diam consequat",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
      total: 219.0,
      image: "/Sidebar/cart1.jpg",
    },
    {
      id: 2,
      name: "Vel faucibus posuere",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
      total: 219.0,
      image: "/Sidebar/cart2.jpg",
    },
    {
      id: 3,
      name: "Ac vitae vestibulum",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
      total: 219.0,
      image: "/Sidebar/cart3.jpg",
    },
    {
      id: 4,
      name: "Elit massa diam",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
      total: 219.0,
      image: "/Sidebar/cart4.jpg",
    },
    {
      id: 5,
      name: "Proin pharetra elementum",
      color: "Brown",
      size: "XL",
      price: 32.0,
      quantity: 1,
      total: 219.0,
      image: "/Sidebar/cart5.jpg",
    },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-6 mt-6 sm:mt-10 mb-10 text-[#000000]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 text-[#1D3178] font-bold">Product</th>
                <th className="py-4 text-[#1D3178] font-bold">Price</th>
                <th className="py-4 text-[#1D3178] font-bold">Quantity</th>
                <th className="py-4 text-[#1D3178] font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={400}
                      className="w-16 h-16 rounded-md mr-4"
                    />
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Color: {item.color}
                      </p>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    </div>
                  </td>
                  <td className="py-4">${item.price.toFixed(2)}</td>
                  <td className="py-4">
                    <input
                      type="number"
                      min="1"
                      defaultValue={item.quantity}
                      className="w-16 border border-gray-300 rounded-md text-center"
                    />
                  </td>
                  <td className="py-4">${item.total.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-wrap justify-between mt-6 gap-4">
            <button className="bg-[#FB2E86] text-white py-2 px-4 rounded-md">
              Update Cart
            </button>
            <button className="bg-[#FB2E86] text-white py-2 px-4 rounded-md">
              Clear Cart
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="space-y-8">
          {/* Cart Totals */}
          <div className="bg-[#E8E6F1] p-4 sm:p-6 rounded-md shadow-md text-[#1D3178]">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="flex justify-between mb-2 text-[#1D3178]">
              <span>Subtotal:</span>
              <span>£219.00</span>
            </div>
            <div className="flex justify-between font-bold mb-4 text-[#1D3178]">
              <span>Total:</span>
              <span>£325.00</span>
            </div>
            <p className="text-sm text-[#8A91AB] mb-4">
              <span className="border rounded bg-[#19D16F] text-white">✓</span>{" "}
              Shipping & taxes calculated at checkout
            </p>
            <button className="bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600">
              Proceed to Checkout
            </button>
          </div>

          {/* Calculate Shopping */}
          <div className="bg-[#F4F4FC] text-[#1D3178] p-4 sm:p-6 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-4">Calculate Shipping</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full border border-gray-300 bg-[#F4F4FC] p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Mirpur Dhaka - 1200"
                className="w-full border border-gray-300 bg-[#F4F4FC] p-2 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border border-gray-300 bg-[#F4F4FC] p-2 rounded-md"
              />
            </div>
            <button className="bg-[#FB2E86] text-white w-full py-2 rounded-md hover:bg-pink-600">
              Calculate Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
