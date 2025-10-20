import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingBag } from 'lucide-react'
import ShoppingCartIcon from './ShoppingCartIcon'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import ProfileButton from './ProfileButton'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b border-gray-300 pb-2'>
      {/* Navbar LEFT */}
      <Link href="/" className="flex items-center space-x-2 ">
        <Image src="/WM.png" alt="Logo" width={50} height={50} />
        <p className='text-md font-medium tracking-wider'>WibuMerch.</p>
      </Link>
      {/* Navbar Right */}
      <div className='flex space-x-4 items-center'>

        <SearchBar />
        <Link href="/" className='icon-md'>
          <Home />
        </Link>
        <Link href="/" className='icon-md'>
          <Bell />
        </Link>
        <ShoppingCartIcon />
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
         <ProfileButton/>
        </SignedIn>
      </div>

    </nav>
  )
}

export default Navbar
