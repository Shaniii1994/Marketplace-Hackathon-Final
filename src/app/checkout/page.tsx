"use client"
import React, { useEffect, useState } from 'react';
import { getCartItems } from '../actions/actions';
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { CgChevronRight } from 'react-icons/cg';
import Image from 'next/image';
import { Product } from '../components/Hero';

export default function CheckOut() {

    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
       // zipCode: "",
        city: "",
    }); 

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        address: false,
        //zipCode: false,
        city: false,

    });

    useEffect(() => {
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem("appliedDiscount")
        if (appliedDiscount) {
          setDiscount(Number(appliedDiscount))
        }
    }, [])


    const subTotal = cartItems.reduce(
      (total, item) => total + item.price * item.stockLevel, 0)
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
          ...formValues,
          [e.target.id]: e.target.value
        })
      } 

      const validateForm = () => {
        const errors = {
          firstName : !formValues.firstName,
          lastName : !formValues.lastName,
          email : !formValues.email,
          phone : !formValues.phone,
          address : !formValues.address,
          //zipCode : !formValues.zipCode,
          city : !formValues.city,
        }
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
      };

      const handlePlaceOrder = async () => {
        Swal.fire({
          title: "Processing your order...",
          text: "Please wait a moment.",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Proceed",
        }).then((result) => {
          if (result.isConfirmed) {
            if (validateForm()) {
              localStorage.removeItem("appliedDiscount");
              Swal.fire(
                "Success!",
                "Your order has been successfully processed!",
                "success"
              );
            } else {
              Swal.fire(
                "Error!",
                "Please fill in all the fields before proceeding.",
                "error"
              );
            }
          }
        });
      

        const orderData = {
          _type : 'order',
          firstName : formValues.firstName,
          lastName : formValues.lastName,
          address : formValues.address,
          city : formValues.city,
          //zipCode : formValues.zipCode,
          phone : formValues.phone,
          email : formValues.email,

        cartItems : cartItems.map(item => ({
          _type : 'reference',
          _ref : item._id
        })),
        subTotal : subTotal,
        discount : discount,
        orderDate : new Date().toISOString
        };

        try { 
            await client.create(orderData)
            localStorage.removeItem("appliedDiscount")
            } catch (error) {
              console.error("error creating order", error)
            
            };
};


return (
    <div className='min-h-screen bg-gray-50'>
      <div className='mt-4'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <nav className='flex items-center gap-2 py-4'>
            <Link href={"/cart"} className='text-[#666666] hover:text-black transition text-sm'>
            cart
            </Link>
            <CgChevronRight/>
            <span>
              CheckOut
            </span>
          </nav>
        </div>
      </div>
    <div className='max-w-4xl mx-auto px-4 sm:px-4 lg:px-4 py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        <div className='bg-white border rounded-lg p-6 space-y-4'>
          <h2 className='text-lg font-semibold mb-4'>
              Order Summary
          </h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className=' flex items-center gap-4 py-3 border-b'>
                <div className='w-16 h-16 rounded overflow-hidden'>
                  {item.image && (
                    <Image
                    src={urlFor(item.image).url()}
                    alt={item.name}
                    width={50}
                    height={50}
                    className='object-cover w-full h-full'
                    />
                  )}
                </div>
                  <div className='flex-1'>
                    <h3 className='text-sm font-medium'>
                      {item.name}
                    </h3>
                    <p className='text-xs text-gray-500'>Quantity : {item.stockLevel}</p>
                </div>
                <p>${item.price * item.stockLevel}</p>
               </div>
            ))
          ) : (
            <p className='text-xs font-medium'>No items in cart</p>
          )}
        <div className='text-right pt-4'>
          <p className='text-sm'>
            SubTotal: <span className='font-medium'>${subTotal}</span>
          </p>
          <p className='text-sm'>
            Discount: <span className='font-medium'>${discount}</span>
          </p>
          <p className='text-lg font-semibold'>
            Total : ${subTotal.toFixed(2)}
          </p>
        </div>
        </div>

          {/* Billing Form*/}
          <div className='bg-white border rounded-lg p-4 space-y-4'>
            <h2 className='text-xl font-semibold'>Billing Information</h2>
            <div className='grid grid-cols-1sm:grid-cols-2 gap-4'>
              <div className='space-x-2'>
                <label htmlFor='firstName'>First Name</label>
                <input
                  type='text'
                  id='firstName'
                  placeholder='Enter Your first Name'
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className='border'
                />
                {formErrors.firstName && (
                  <p className='text-sm text-red-500'>
                    First Name is Required
                  </p>
                )}
              
              </div>
              <div className='space-x-2'>
                <label htmlFor='lastName'>Last Name</label>
                <input
                  type='text'
                  id='lastName'
                  placeholder='Enter Your last Name'
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className='border'
                />
                {formErrors.lastName && (
                  <p className='text-sm text-red-500'>
                    Last Name is Required
                  </p>
                )}
              </div>
              <div className='space-x-2'>
                <label htmlFor='address'>Address</label>
                <input
                  type='text'
                  id='address'
                  placeholder='Enter Your address'
                  value={formValues.address}
                  onChange={handleInputChange}
                  className='border'
                />
                {formErrors.address && (
                  <p className='text-sm text-red-500'>
                    address is Required
                  </p>
                )}
              </div>
              
              <div className='space-x-2'>
                <label htmlFor='city'>City</label>
                <input
                  type='text'
                  id='city'
                  placeholder='Enter Your city'
                  value={formValues.city}
                  onChange={handleInputChange}
                  className='border'
                />
                {formErrors.city && (
                  <p className='text-sm text-red-500'>
                    city is Required
                  </p>
                )}
              </div>
              
              <div className='space-x-2'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='text'
                  id='phone'
                  placeholder='Enter Your phone number'
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className='border'
                />
                {formErrors.phone && (
                  <p className='text-sm text-red-500'>
                    phone number is Required
                  </p>
                )}
              </div>
              
              <div className='space-x-2'>
                <label htmlFor='email'>Email</label>

                <input
                  type='text'
                  id='email'
                  placeholder='Enter Your email'
                  value={formValues.email}
                  onChange={handleInputChange}
                  className='border'
                />
                {formErrors.email && (
                  <p className='text-sm text-red-500'>
                    email is Required
                  </p>
                )}
              </div>
            <button className='w-full h-12 bg-blue-500 hover:bg-blue-700 text-white' onClick={handlePlaceOrder}>
              Place Order
            </button>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};



