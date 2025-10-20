"use client";
import { UserButton } from '@clerk/nextjs';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
const ProfileButton = () => {
    const router = useRouter();
  return (
    <UserButton>
        <UserButton.MenuItems>
            <UserButton.Action label='See Orders' labelIcon={<ShoppingBag/>} onClick={()=>router.push("/orders")}/>
        </UserButton.MenuItems>
    </UserButton>
  )
}
export default ProfileButton;