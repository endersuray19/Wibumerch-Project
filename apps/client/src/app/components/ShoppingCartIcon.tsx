"use client"
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React, { use } from 'react'
import useCartStore from '../Store/cartStore'

const ShoppingCartIcon = () => {
  const {cart, hasHydrated} = useCartStore();
  if(!hasHydrated) return null;
  return (
    <div>
      <Link href="/cart" className="relative top-[4px]">
        <ShoppingCart size={24} className='text-gray-400'/>
        <span className='absolute -top-1 -right-3 bg-amber-300 text-gray-600 w-4 h-4 rounded-xl flex items-center justify-center'>{cart.length}</span>
      </Link>
    </div>
  )
}

export default ShoppingCartIcon
