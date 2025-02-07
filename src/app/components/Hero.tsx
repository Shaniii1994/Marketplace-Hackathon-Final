
"use client";
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

export interface Product {
  _id: string;
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  discountPercentage?: number;
  stockLevel: number;
  category: string;
  slug: {
    _type: 'slug';
    current: string;
  };}

async function fetchProducts() {
  const query = `*[_type == "product"] {
    _id,
    name,
    price,
    image {
      asset -> {
        url
      }
    },
    discountPercentage,
    stockLevel,
    category,
  }`;

  return client.fetch(query);
}

function ProductListing() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setIsLoading(false);
    };

    loadData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    Swal.fire({
      position : "top-right",
      icon : "success",
      title : `${product.name} added to cart`,
      showConfirmButton : false,
      timer : 1000
    });

    addToCart(product)
  }

  return (
    <div>
      <div className="mb-6 p-4">
        <input
          type="text"
          placeholder="Search by product name..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {isLoading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white p-4 rounded-lg shadow-md transform transition-transform hover:scale-105"
              >
                  <Image
                  src={product.image.asset.url}
                  alt={product.name}
                  className="w-full h-56 object-contain rounded-md"
                  width={200}
                  height={200}
                />
                <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
                <p className="text-lg text-green-500">
                  {product.discountPercentage ? (
                    <span className="line-through text-red-500">
                      ${product.price}
                    </span>
                  ) : (
                    `Price: $${product.price}`
                  )}
                </p>
                {product.discountPercentage && (
                  <p className="text-lg font-semibold text-green-500">
                    Discount Price: $
                    {(
                      product.price -
                      (product.price * product.discountPercentage) / 100
                    ).toFixed(2)}
                  </p>
                )}
                <p
                  className={`mt-2 text-sm ${
                    product.stockLevel > 0
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  Stock Level: {product.stockLevel}
                </p>
              
                 <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white mx-20 my-8 font-semibold mt-4 py-2 px-10 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                    onClick={(e) => handleAddToCart(e, product)}
                    >
                    Add To Cart
                    </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-gray-500">
              No products found
            </p>
          )}
          
        </div>
      )};
    </div>
  );
};

export default ProductListing;
