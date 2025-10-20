import { auth } from '@clerk/nextjs/server';
import React from 'react'

const page = async () => {
    const { getToken } = await auth();
    const token = await getToken();
    console.log('Token:', token);
    //product service test
    const res = await fetch('http://localhost:8000/test', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    
    const data = await res.json();
    console.log(data);
    //order service test
    const resProduct = await fetch('http://localhost:8001/test', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    );
    const dataProduct = await resProduct.json();
    console.log(dataProduct);
    return (
        <div>
            <h1>Test Page</h1>
        </div>
    )
}

export default page
