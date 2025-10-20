"use client"
import { ArrowRight, Trash } from 'lucide-react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import React, { useState } from 'react'
import ShippingForm from '../components/ShippingForm'
import PaymentForm from '../components/PaymentForm'
import Image from 'next/image';
import { shippingFormInputs } from '@/types'
import useCartStore from '../Store/cartStore'

const steps = [
  {
    id: 1,
    title: "Shoping Cart"
  },
  {
    id: 2,
    title: "Shipping Address"
  },
  {
    id: 3,
    title: "Payment Method"
  },
]

const page = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const [shippingForm, setShippingForm] = useState<shippingFormInputs>()

  const activeStep = parseInt(searchParam.get("step") || "1")

  const {cart, removeFromCart, clearCart} = useCartStore();

  const handleRemoveFromCart = (productID :number|string)=>{
    const product = cart.find((item)=>item.id === productID);
    if(product){
      removeFromCart(product);
    }
  }

  return (
    <div className='flex flex-col justify-between items-center w-full p-4'>
      <h1 className='bigger-text'>Your Shoping Cart</h1>
      {/* step */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start w-full lg:gap-10 gap-4 my-4">
        {steps.map((step) => (
          <div className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}
            key={step.id}>
            <div className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-200"}`}>{step.id}</div>
            <p className={`font-medium text-sm ${step.id === activeStep ? "text-gray-800 " : "text-gray-200"}`}>{step.title}</p>
          </div>
        ))}
      </div>
      {/* detail steps */}
      <div className="w-full flex flex-col lg:flex-row gap-16">

        <div className="detail-page lg:w-7/12">
          {activeStep === 1 ?
            cart.map((item) => (
              <div className="flex justify-between">
                <div className="flex gap-4" key={item.id}>
                  {/* image and product */}
                  {/* image */}
                  <div className="rounded-md w-32 h-32 bg-gray-50  overflow-hidden relative">
                    <Image fill src={item.images[0]} alt={item.title} />
                  </div>
                  {/* product */}
                  <div className="flex flex-col  gap-1">
                    <p className='text-small font-medium'>Title: {item.title}</p>
                    <p className='text-small text-gray-400'>QTY : {item.quantity}</p>
                    
                    <p className='text-small text-gray-400'>Manufacture : {item.manufacture}</p>
                    <p className='text-small text-gray-400'>Price per Product : Rp. {item.price.toLocaleString("ID-id")}</p>
                    <p className='text-small font-medium'>Total : Rp. {item.price.toLocaleString("ID-id")}</p>

                  </div>
                </div>
                {/* delete */}
                <button onClick={()=>handleRemoveFromCart(item.id)}>
                  <Trash className='text-red-500 cursor-pointer' />
                </button>
              </div>
            ))
            : activeStep === 2
              ? <ShippingForm  setShippingForm={setShippingForm}/>
              : activeStep === 3
                && shippingForm ? <PaymentForm />
                : <p className='test-small'>Please fill payment form</p>
          }
        </div>
        <div className={`detail-page lg:w-5/12 `}>
          <h1 className="font-semibold">
            Cart Details
          </h1>
          <div className="flex-4">
            <div className="flex justify-between text-sm">
              <p className='font-sm'>Sub Total</p>
              <p className='font-sm'>
                Rp {
                  cart.reduce(
                    (acc, item) => acc + item.price * item.quantity, 0
                  ).toLocaleString("id-ID")
                }
              </p>

            </div>
            <div className="flex justify-between items-center">
              <p className='font-sm'>Discount (10%)</p>
              <p className='font-sm'>
                Rp 100.000
              </p>

            </div>
            <div className="flex justify-between items-center">
              <p className='font-sm'>Shipping Fee</p>
              <p className='font-sm'>
                Rp 20.000
              </p>

            </div>
            <hr className='bg-gray-400' />
            <div className="flex justify-between items-center">
              <p className='font-sm'>Total</p>
              <p className='font-sm'>
                Rp {
                  cart.reduce(
                    (acc, item) => acc + item.price * item.quantity, 0
                  ).toLocaleString("id-ID")
                }
              </p>

            </div>
           { activeStep === 1 &&  <button onClick={() => router.push("/cart?step=2", { scroll: false })} className='button-full bg-gray-800 hover:text-gray-800'>
              Continue
              <ArrowRight className='w-3 h-3' />
            </button>}
          </div>


        </div>
      </div>
    </div>
  )
}

export default page
