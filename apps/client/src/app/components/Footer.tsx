import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center md:flex-row md:justify-between md:items-start bg-gray-800 p-8 rounded-lg text-white'>
      <div className="footer-part">
        <Link className="flex items-center " href="/">
          <Image src="/WM.png" alt="Logo" width={50} height={50} />
          <p className=' ml-2 hidde md:block text-sm font-medium tracking-wider text-white'> WibuMerch</p>
        </Link>
        <p className='text-small'>@ 2025 WibuMerch.</p>
        <p className='text-small'>All Right Reserved</p>
      </div>
      <div className="footer-part ">
        <p className='title-footer'>Links</p>
        <Link href="/" className='text-small'>Homepage</Link>

        <Link href="/" className='text-small'>Contact</Link>
        <Link href="/" className='text-small'>Term of Service</Link>
        <Link href="/" className='text-small'>Privacy Policy</Link>
      </div>
      <div className="footer-part ">
        <p className='title-footer'>Links</p>
        <Link href="/" className='text-small'>All Products</Link>
        <Link href="/" className='text-small'>New Merch</Link>
        <Link href="/" className='text-small'>Best Selling</Link>
        <Link href="/" className='text-small'>Discount Merch</Link>
      </div>
      <div className="footer-part ">
        <p className='title-footer'>Links</p>
        <Link href="/" className='text-small'>Contact</Link>
        <Link href="/" className='text-small'>Blog</Link>
        <Link href="/" className='text-small'>Affiliate Manfucture</Link>
       
      </div>
    </div>
  )
}

export default Footer
