
"use client"
import React, { useEffect, useState } from 'react'
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
import Swal from 'sweetalert2'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { useRouter } from 'next/navigation'
import { Product } from '../components/Hero'

const CartPage = () => {

    const [cartItems, setCartItems] = useState<Product[]>([])

    useEffect(() => {
        setCartItems(getCartItems())
    }, []);


    const HandleRemove = (id : string) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this item!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if(result.isConfirmed) {
              removeFromCart(id)
              setCartItems(getCartItems())
              Swal.fire("Removed", "Item has been removed.", "success");  
            }

            
        })
    }
const handleQuantitychange = (id : string, quantity : number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems())
}

const handleIncrement = (id : string) => {
    const product = cartItems.find((item) => item._id === id);
    if(product)
        handleQuantitychange(id, product.stockLevel + 1)
}


const handleDecrement = (id : string) => {
    const product = cartItems.find((item) => item._id === id);
    if(product && product.stockLevel > 1)
        handleQuantitychange(id, product.stockLevel - 1)
}

const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
};

const router = useRouter();

const handleProceed = () => {
    Swal.fire({
        title: "Proceed to Checkout?",
        text: "Please review your cart before checkout",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, proceed!"
    }).then((result) => {
        if(result.isConfirmed){
            Swal.fire("success", "Your Order has been successfully proceed", "success");
            router.push("/checkout")
            setCartItems([])
        }})
};


  return (
    <div className="container mx-auto p-4">
            <h1 className="text-3xl text-center font-bold mb-10">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 spcae-x-4">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 mt-20">
                    {cartItems.map((item) => (
                    <div key={item._id} 
                    className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4"
                    >
                    {item.image && (
                    <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                    />
                    )}

                    <div className="flex-1 ml-4">
                        <h2 className='text-lg font-semibold'>{item.name}</h2>
                        <p className="text-gray-500">Price: ${item.price}</p> 
                        <div className="flex items-center space-x-2 mt-2">
                        <button
                        onClick={() => handleDecrement(item._id)}
                        className="px-2 py-1 w-8 h-8 bg-blue-600 text-white hover:bg-blue-700 rounded"
                        >
                            -
                        </button>
                        <span>{item.stockLevel}</span>
                        <button
                        onClick={() => handleIncrement(item._id)}
                        className="px-2 py-1w-8 h-8 bg-blue-600 text-white hover:bg-blue-700 rounded"
                        >
                            +
                        </button>
                        </div>
                    </div>
                    <button
                    onClick={() => HandleRemove(item._id)}
                    className="ml-4 text-white hover:bg-blue-700 bg-blue-600 rounded mt-4 px-2 py-2"
                    >
                        Remove
                    </button>
                    </div>
                ))}
                </div>
                
                {/* Cart Summary */}
<div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
    <div className="flex justify-between mb-2">
        <span className="text-gray-600">Subtotal:</span>
        <span className="font-semibold">${calculatedTotal().toFixed(2)}</span>
    </div>
<button
onClick={handleProceed}
className="w-full bg-blue-600 text-white py-2 mt-4 rounded hover:bg-blue-700"
>
    Proceed
</button>
</div>
</div>
)}
</div>
  );
};

export default CartPage;