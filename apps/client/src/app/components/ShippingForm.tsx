import { shippingFormInputs, shippingFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

const ShippingForm = ({setShippingForm}:{setShippingForm:(data:shippingFormInputs)=>void}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<shippingFormInputs>();
    resolver: zodResolver(shippingFormSchema)

    const router = useRouter();

    const habdleShippingForm  : SubmitHandler<shippingFormInputs> = (data) => {
        setShippingForm(data);
        router.push("/cart?step=3",{scroll:false});
    }
    return (
        <div className="">
            <h1 className='font-semibold mb-5'>Shipping Form</h1>
            <form className='flex-4' onSubmit={handleSubmit(habdleShippingForm)}>
                <div className="flex-1 ">
                    <label htmlFor="name" className='text-small font-medium text-gray-800'>Name</label>
                    <input className='input-shipping' type="text" id='name' placeholder='Enter your name here'{...register("name")}/>
                    {errors.name && <p className='text-red-500 text-small'>{errors.name.message}</p>}
                </div>
                <div className="flex-1 ">
                    <label htmlFor="email" className='text-small font-medium text-gray-800'>Email</label>
                    <input className='input-shipping' type="text" id='email' placeholder='Enter your email here'{...register("email")}/>
                    {errors.email && <p className='text-red-500 text-small'>{errors.email.message}</p>}
                </div>
                <div className="flex-1 ">
                    <label htmlFor="phone" className='text-small font-medium text-gray-800'>Phone Number</label>
                    <input className='input-shipping' type="text" id='phone' placeholder='Enter your phone number here'{...register("phone")}/>
                    {errors.phone && <p className='text-red-500 text-small'>{errors.phone.message}</p>}
                </div>
                <div className="flex-1 ">
                    <label htmlFor="address" className='text-small font-medium text-gray-800'>Address</label>
                    <input className='input-shipping' type="text" id='address' placeholder='Enter your address here'{...register("address")}/>
                    {errors.address && <p className='text-red-500 text-small'>{errors.address.message}</p>}
                </div>
                <div className="flex-1 ">
                    <label htmlFor="city" className='text-small font-medium text-gray-800'>City</label>
                    <input className='input-shipping' type="text" id='city' placeholder='Enter your name here'{...register("city")}/>
                    {errors.city && <p className='text-red-500 text-small'>{errors.city.message}</p>}
                </div>
                <button className='button-full bg-gray-900'>
                    Continue <ArrowRight/>
                </button>
            </form>
        </div>

    )
}

export default ShippingForm
