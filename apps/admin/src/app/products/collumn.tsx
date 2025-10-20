"use client"

import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import Image from "next/image";
export type Products = {
  id: number;
  title: string;
  category: string;
  character: string;
  series:string;
  manufacture: string;
  description: string;
  price:number;
  stock: number;
  images:string[];
}
export const columns: ColumnDef<Products>[] = [
{
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
 
  {
    accessorKey: "title",
     header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className=" h-4 w-4" />
        </Button>
      )
    },
    cell:({row})=>{
      const product = row.original;
      const titleProduct = product.title.length > 17 ? `${product.title.substring(0,17)}...` : product.title;
      return(
       <div>
        {titleProduct}
       </div>
      )
    }
  },
  {
    accessorKey: "images",
     header: "Image",
     cell:({row})=>{
      const product = row.original;
      return(
        <div className="w-9 h-9 relative">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            
          />
        </div>
      )
     }
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
     cell:({row})=>{
      const product = row.original;
      return(
        <div className="px-3">
          {product.category}
        </div>
      )
     }
  },
  {
    accessorKey: "character",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Character
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
     cell:({row})=>{
      const product = row.original;
      return(
        <div className="px-3">
          {product.character}
        </div>
      )
     }
  },
  {
    accessorKey: "series",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Series
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "manufacture",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Manufacture
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
     cell:({row})=>{
      const product = row.original;
      return(
        <div className="px-3">
          {product.manufacture}
        </div>
      )
     }
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
     cell:({row})=>{
      const product = row.original;
      return(
        <div className="px-3">
          {product.price}
        </div>
      )
     }
  },
  {
    accessorKey: "stock",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Stock
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
     cell:({row})=>{
      const product = row.original;
      return(
        <div className="px-3">
          {product.stock}
        </div>
      )
     }
  },
    {
    id: "actions",
    header:"Action",
    cell: ({ row }) => {
      const Products = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(Products.id.toString())}
            >
              Copy Products ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/users/${Products.id}`}>
                View customer
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>View Products details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]