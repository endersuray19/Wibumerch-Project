import React from 'react'
import { ProductType } from '@/types';
import { products } from '../Utils';
import ProductCard from './ProductCard';
import Categories from './Categories';
import Filter from './Filter';
import Link from 'next/link';
const ProductList = ({category,params}:{category:string,params:"homepage"|"products"}) => {

    return (
        <div className='w-full'>
           
         <Categories />
          {params==="products" && <Filter/>} 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 2xl:gap-16">
               
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        View all products
      </Link>
        </div>
    )
}

export default ProductList
