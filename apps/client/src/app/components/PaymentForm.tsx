import { paymentFormInputs, paymentFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const PaymentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<paymentFormInputs>();
    resolver: zodResolver(paymentFormSchema)

    const router = useRouter();

    const handlePaymentForm  : SubmitHandler<paymentFormInputs> = (data) => {
        router.push("/cart?step=3",{scroll:false});
    }
    return (
        <div className="">
            <h1 className='font-semibold mb-5'>Shipping Form</h1>
            <form className='flex-4' onSubmit={handleSubmit(handlePaymentForm)}>
                <div className="flex-1 ">
                    <label htmlFor="cardHolder" className='text-small font-medium text-gray-800'>Card Holder</label>
                    <input className='input-shipping' type="text" id='cardHolder' placeholder='Enter your card holder here'{...register("cardHolder")}/>
                    {errors.cardHolder && <p className='text-red-500 text-small'>{errors.cardHolder.message}</p>}
                </div>
                <div className="flex-1 ">
                    <label htmlFor="cardNumber" className='text-small font-medium text-gray-800'>Card Number</label>
                    <input className='input-shipping' type="text" id='cardNumber' placeholder='Enter your Card Number here'{...register("cardNumber")}/>
                    {errors.cardNumber && <p className='text-red-500 text-small'>{errors.cardNumber.message}</p>}
                </div>
                <div className="flex-1 ">
                    <label htmlFor="expirationDate" className='text-small font-medium text-gray-800'>Expiration Date</label>
                    <input className='input-shipping' type="text" id='expirationDate' placeholder='Enter your Expiration Date here'{...register("expirationDate")}/>
                    {errors.expirationDate && <p className='text-red-500 text-small'>{errors.expirationDate.message}</p>}
                </div>
                <div className="flex-1 ">
                    <label htmlFor="cvv" className='text-small font-medium text-gray-800'>CVV</label>
                    <input className='input-shipping' type="text" id='address' placeholder='Enter your CVV here'{...register("cvv")}/>
                    {errors.cvv && <p className='text-red-500 text-small'>{errors.cvv.message}</p>}
                </div>
                <div className='flex items-center gap-2 mb-5'>
                  <Image src="/klarna.png" alt="klarna" width={50} height={50}/>
                    <Image src="/cards.png" alt="klarna" width={50} height={50}/>
                      <Image src="/stripe.png" alt="klarna" width={50} height={50}/>
                </div>
                <button className='button-full bg-gray-900'>
                    Checkout <ShoppingCart/>
                </button>
            </form>
        </div>

    )
}

export default PaymentForm
