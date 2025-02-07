import React from 'react';
import ProductDetails from './[productdetails]/page';
import RelatedProducts from './[productdetails]/[relatedproducts]/page';
import Image from 'next/image';

const Product = () => {
  return (
    <div className="w-full bg-white mt-10">
  {/* Header Section */}
  <div className="w-full bg-[#F6F5FF] py-8 px-6 md:px-20 text-center md:text-left">
    <h2 className="text-[#101750] text-xl md:text-3xl lg:text-4xl font-bold">
      Product Details
    </h2>
    <p className="text-sm md:text-base text-gray-500 mt-2">
      Home &nbsp;.&nbsp; Pages &nbsp;.&nbsp;{' '}
      <span className="text-[#FB2E86] font-medium">Product Details</span>
    </p>
  </div>

  {/* Product Details */}
  <ProductDetails />

  {/* Related Products */}
  <RelatedProducts />

  {/* Brand Section */}
  <div className="rounded mt-20 mb-20 border w-full sm:w-[90%] lg:w-[904px] h-auto sm:h-[93px] mx-auto">
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


export default Product;