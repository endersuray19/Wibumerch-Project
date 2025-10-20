"use client"
import { AppAreaChart } from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import { AppPieChart } from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import { Button } from "@/components/ui/button";

import { CirclePlus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  
  return (
    <>
     <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg col-span-2 2xl:col-span-1">
         <AppBarChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-1 2xl:col-span-1">
        <CardList title="Latest Transactions"/>
      </div>
       <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content"/>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-2 2xl:col-span-1">
        <AppAreaChart/>
      </div>
      
    </div>
   
    </>
   
    
  );
}
