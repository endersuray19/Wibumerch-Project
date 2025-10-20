"use client";
import { ProductType } from '@/types';
import { ShoppingCart, ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import useCartStore from '../Store/cartStore';
import { toast } from 'react-toastify';

const ProductCard = ({product}:{product:ProductType}) => {

   const {addToCart} = useCartStore();

   const handleAddToCart = () => {
    addToCart({...product,quantity:1});
    toast.success("Product added to cart!")
   }
  return (
    <div className='shadow-lg overflow-hidden rounded-lh hover:scale-115 transition-all duration-300'>
      <Link href={`/products/${product.id}`}>
        <div className=" relative ">
          <Image src={product.images[0]} alt={product.title} width={350} height={300} className='object-cover ' />
         
        </div>
      </Link>
      {/* Product detail */}
      <div className="flex flex-col gap-2 p-4 ">
       <div className="flex">
         {product.stock <= 0 ? <p className='bg-red-700 py-2 px-4 rounded-md text-white text-sm font-bold inline-block'>Empty Stock</p>: <p className='bg-green-700 text-white py-2 px-4 rounded-md text-sm font-bold inline-block '>Ready Sale</p>}
       </div>
        <h1 className='font-bold'>{product.title.substring(0,45)}...</h1>
        
          <p className='text-blue-700 font-medium'>IDR {product.price.toLocaleString("id-ID")}</p>
         
      
         <button className='ring-1 ring-gray-200 shadow-lg rounded-md px-4 py-1 font-medium text-black cursor-pointer hover:text-white hover:bg-black flex items-center text-center gap-2' onClick={handleAddToCart}>
            <ShoppingCartIcon/>
            Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard
