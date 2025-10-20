'use server'
import ImageGallery from '@/app/components/ImageGallery';
import ProductInteraction from '@/app/components/ProductInteraction';
import { products } from '@/app/Utils';
import { ProductType } from '@/types'
import { Images } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = (await params).id;
  
  const product = products.find(p => p.id.toString() === productId);
  if (!product) {
    return <div>Product not found</div>
  }
 
  return (
    <div className='flex flex-col gap-4 lg:flex-row md:gap-12 mt-12' id='product'>
     
         <ImageGallery images={product.images} title={product.title}/>
    

      <div className="w-full lg:w-7/12 ">
        {product.stock !== 0 ? (
          <span className='bg-green-600 text-white font-bold text-sm px-2 py-1 rounded-full mt-2 mb-2'>Ready Stock</span>
        ) : (
          <span className='bg-red-600 text-white font-bold text-sm px-2 py-1 rounded-full'>Out of Stock</span>
        )}
        <h1 className='mt-2 mb-2 font-medium'>{product.title}</h1>
        <p className='text-xl font-bold mb-2'>Rp {product.price.toLocaleString("Id-id")}</p>
        <hr className='border-2 rounded-2xl' />
        <table className="mt-2 mb-2">
          <tbody>
            <tr>
              <td className="text-gray-700 text-sm pr-4 py-1 align-top">Character</td>
              <td className="py-1">
                <div className="inline-block text-sm bg-gray-200 px-2 py-1 rounded-full">{product.character}</div>
              </td>
            </tr>
            <tr>
              <td className="text-gray-700 text-sm pr-4 py-1 align-top">Series</td>
              <td className="py-1">
                <div className="inline-block text-sm bg-gray-200 px-2 py-1 rounded-full">{product.series}</div>
              </td>
            </tr>
            <tr>
              <td className="text-gray-700 text-sm pr-4 py-1 align-top">Category</td>
              <td className="py-1">
                <div className="inline-block text-sm bg-gray-200 px-2 py-1 rounded-full">{product.category}</div>
              </td>
            </tr>
            <tr>
              <td className="text-gray-700 text-sm pr-4 py-1 align-top">Manufacture</td>
              <td className="py-1">
                <div className="inline-block text-sm bg-gray-200 px-2 py-1 rounded-full">{product.manufacture}</div>
              </td>
            </tr>
          </tbody>
        </table>
        <hr className='border-2 rounded-2xl' />
         <h1 className='mt-2 mb-2 font-medium'>About this item </h1>
        <p className='text-gray-500 text-sm'>{product.description}</p>

        <ProductInteraction
          product={product}

        />
        <div className='flex items-center gap-2 mt-5 mb-5'>
          <Image src="/klarna.png" alt="klarna" width={50} height={50} />
          <Image src="/cards.png" alt="klarna" width={50} height={50} />
          <Image src="/stripe.png" alt="klarna" width={50} height={50} />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
