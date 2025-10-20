import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Inbox, Calendar, Search, Settings, ChartBar, ShoppingBag, Users, CreditCard, Receipt, LayoutGrid, MonitorPlay, UserRound, Factory, Box } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/lib/logo.png'
const itemsMain = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Analystics",
    url: "/analytics",
    icon: ChartBar,
  },
  {
    title: "Order",
    url: "/orders",
    icon: ShoppingBag,
  },
  {
    title: "Users",
    url: "/users",
    icon: Users,
  },

]
const itemsMerch = [
  {
    title: "Categories",
    url: "/Categories",
    icon: LayoutGrid,
  },
  {
    title: "Series",
    url: "/series",
    icon: MonitorPlay,
  },
  
  {
    title: "Character",
    url: "/",
    icon: UserRound,
  },
  {
    title: "Manufacture",
    url: "/",
    icon: Factory,
  },
  {
    title: "Products",
    url: "/products",
    icon: Box,
  },
]
const itemsTransaction = [
  {
    title: "Transactions",
    url: "/transactions",
    icon: CreditCard,
  },
  {
    title: "Payments",
    url: "/payments",
    icon: Receipt,
  },
  
  {
    title: "Invoces",
    url: "/invoces",
    icon: Inbox,
  },
]
const AppSidebar = () => {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
           <Link href="/">
              <span className='flex items-center'>
                {/* 2. Use the imported variable here */}
                <Image src={logo} alt='logo' width={55} height={55} />
                <h1>Dasboard WibuMerch</h1>
              </span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsMain.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className="flex items-center gap-x-2">
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Merch</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenu>
                {itemsMerch.map((item)=>(
                  <SidebarMenuButton key={item.title}>
                    <Link href={item.url} className='flex items-center gap-x-2'>
                    <item.icon/>
                      <span>{item.title}</span>
                   
                    </Link>
                  </SidebarMenuButton>
                ))}
              </SidebarMenu>
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Transactions</SidebarGroupLabel>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenu>
                {itemsTransaction.map((item)=>(
                  <SidebarMenuButton key={item.title}>
                    <Link href={item.url} className='flex items-center gap-x-2'>
                    <item.icon/>
                      <span>{item.title}</span>
                   
                    </Link>
                  </SidebarMenuButton>
                ))}
              </SidebarMenu>
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
