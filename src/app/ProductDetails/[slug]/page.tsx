
"use client"
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import  {client}  from '@/sanity/lib/client';

export interface ProductDetails {
  name: string;
  price: number;
  image: {
    asset: {
      url: string;
    };
  };
  discountPercentage?: number;
  stockLevel: number;
  description: string;
  category: string;
  slug: string;

}
interface PageProps{
  params:{
    slug :string
  }
}

async function fetchProductDetails(_params: String) {
  const query = `*[_type == "product" && slug == $slug][0] {
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
  
  return client.fetch(query, { });
}

const ProductDetailsPage = async({params}:PageProps)=> {
  const router = useRouter();
  const { slug } = router.query;

  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (slug) {
      const loadProduct = async () => {
        const productData = await fetchProductDetails(slug as string);
        setProduct(productData);
        setIsLoading(false);
      };
      loadProduct();
    }
  }, [slug]);

  if (isLoading) {
    return <p>Loading product details...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img
        src={product.image.asset.url}
        alt={product.name}
        className="w-full h-64 object-contain my-4"
      />
      <p className="text-lg text-green-500">Price: ${product.price}</p>
      {product.discountPercentage && (
        <p className="text-lg font-semibold text-green-500">
          Discount Price: $
          {(
            product.price -
            (product.price * product.discountPercentage) / 100
          ).toFixed(2)}
        </p>
      )}
      <p className="mt-4 text-gray-600">{product.description}</p>
      <p className="mt-2 text-sm text-gray-500">
        Category: {product.category}
      </p>
      <p
        className={`mt-2 text-sm ${
          product.stockLevel > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        Stock Level: {product.stockLevel}
      </p>
    </div>
  );
};

export default ProductDetailsPage;
