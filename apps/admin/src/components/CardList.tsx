import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import Image from 'next/image'
import { listproducts } from '@/lib/listproduct'


const CardList = ({ title }: { title: string }) => {
    const popularProducts = listproducts;
    return (

        <div className="">
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {popularProducts.slice(0,4).map((item) => (
              <Card
                key={item.id}
                className="flex-row items-center justify-between gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-sm relative overflow-hidden">
                  <Image
                    src={Object.values(item.images)[0] || ""}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-0 text-left">
                  {item.title.length > 43 ?
                  <p className="text-xs ">{  item.title.substring(0,43)}...</p>
                
                  :<p className="text-xs ">{item.title}</p>}
                    
                
                  <p className='text-gray-400 text-xs'>{item.manufacture}</p>
                </CardContent>
                <CardFooter className="p-0 text-xs">Rp {item.price.toLocaleString("ID")}</CardFooter>
              </Card>
            ))
         }
      </div>
    </div>
    )
}

export default CardList
