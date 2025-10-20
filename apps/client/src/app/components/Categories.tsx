"use client"
import React from 'react'
import {
  Footprints,
  Glasses,
  Briefcase,
  Shirt,
  ShoppingBasket,
  Hand,
  Venus,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const categories = [
  {
    name: "All",
    icon: <ShoppingBasket className="w-4 h-4" />,
    slug: "all",
  },
  {
    name: "Figure",
    icon: <Shirt className="w-4 h-4" />,
    slug: "figure",
  },
  {
    name: "Fumo",
    icon: <Footprints className="w-4 h-4" />,
    slug: "fumo",
  },
  {
    name: "Robot Spirits",
    icon: <Glasses className="w-4 h-4" />,
    slug: "robot-spirits",
  },
  {
    name: "Nendoroid",
    icon: <Briefcase className="w-4 h-4" />,
    slug: "nendoroid",
  },
  {
    name: "Figures",
    icon: <Shirt className="w-4 h-4" />,
    slug: "t-shirts",
  },
  {
    name: "NeoFumo",
    icon: <Footprints className="w-4 h-4" />,
    slug: "shoes",
  },
  {
    name: "Robot Spirits Neo",
    icon: <Glasses className="w-4 h-4" />,
    slug: "accessories",
  },
  
];
const Categories = () => {
    const searchParam = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();


    const selectedCategory = searchParam.get("category");

    const handleChangeCategory = (value:string|null)=>{
        const params = new URLSearchParams(searchParam);
        params.set("category", value || "all");
        router.push(`${pathname}/?${params.toString()}`,{scroll:false});
    }
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 mb-4 p-2 bg-gray-100 rounded-lg text-sm`}> 
      {categories.map((category) => (
        <div key={category.name} className={`flex items-center justify-center gap-2 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-200 text-gray-700 transition ${
            category.slug === selectedCategory ? "bg-gray-200 text-gray-700"
            :"text-black"
        }`} onClick={()=>handleChangeCategory(category.slug)}>
            {category.icon}{category.name}
        </div>
      ))}
    </div>
  )
}

export default Categories
