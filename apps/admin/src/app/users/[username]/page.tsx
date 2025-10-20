import CardList from '@/components/CardList'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Badge, BadgeCheck } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import EditUser from '@/components/EditUser'
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import { AvatarImage } from '@/components/ui/avatar'
import {ChartAppLine} from '@/components/ChartAppLine'
const page = () => {
    return (
        <div>
            <h1>SIngle User Page</h1>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>ENder</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* Contaimner */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
                {/* left */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* <div className="bg-fore">
                        <h1 className='text-xl'>User Badge</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold'>
                                        Verified User
                                    </h1>
                                    <p className='text-sm'>This user has been verified by the admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold'>
                                        Verified User
                                    </h1>
                                    <p className='text-sm'>This user has been verified by the admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold'>
                                        Verified User
                                    </h1>
                                    <p className='text-sm'>This user has been verified by the admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold'>
                                        Verified User
                                    </h1>
                                    <p className='text-sm'>This user has been verified by the admin</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div> */}
                    <div className="bg-fore">
                        <div className="flex items-center justify-between" >
                            <h1 className="text-xl">
                                User Information
                            </h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button className='text-black'>Edit User</Button>
                                </SheetTrigger>
                                <EditUser />
                            </Sheet>
                        </div>

                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-4 mb-8">
                                <p className='sm-fore'>Profile Completion</p>
                                <Progress value={66} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Full Name :</span>
                                <span className='mb-2 font-semibold'>
                                    Hone Doi
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Email :</span>
                                <span className='mb-2 font-semibold'>
                                    HuanDuio@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>Phone :</span>
                                <span className='mb-2 font-semibold'>
                                    03459-123456-789
                                </span>
                            </div>
                             <div className="flex items-center gap-2">
                                <span className='font-bold'>Address :</span>
                                <span className='mb-2 font-semibold'>
                                    Jln. Batuh Jaru no 2121
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className='font-bold'>City :</span>
                                <span className='mb-2 font-semibold'>
                                    Cloud City
                                </span>
                            </div>
                        </div>
                        <p className='text-sm'>Joined on 2025.01.09</p>
                    </div>
                    <div className="bg-fore"><CardList title="Recent Transactions" /></div>

                </div>
                {/* left */}
                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="bg-fore">
                        <div className="flex items-center">
                            <Avatar className='size-12 mr-4'>
                                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" alt="User Avatar" width={30} />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                             <h1 className='text-xl'>John Doe</h1>
                        </div>
                          <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold'>
                                        Verified User
                                    </h1>
                                    <p className='text-sm'>This user has been verified by the admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold'>
                                        Verified User
                                    </h1>
                                    <p className='text-sm'>This user has been verified by the admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold'>
                                        Verified User
                                    </h1>
                                    <p className='text-sm'>This user has been verified by the admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className='rounded-full bg-blue-500/30 border-1 border-blue-500/50' />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className='font-bold'>
                                        Verified User
                                    </h1>
                                    <p className='text-sm'>This user has been verified by the admin</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                    <div className="bg-fore">
                        <ChartAppLine />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
