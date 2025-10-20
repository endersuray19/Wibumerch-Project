import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from './ui/checkbox'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button'
import { Calendar1Icon } from 'lucide-react'
import { format } from 'date-fns'

const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
    return (
        <div>
            <h1 className='font-medium text-xl mb-5'>Todo List</h1>
            <ScrollArea className='max-h-[400px] overflow-y-auto mt-4'>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button className='w-full'>
                            <Calendar1Icon/>
                            {date ? (
            format(date, "PPP")): (<span>
                                Pick Up Date
                                </span>)}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <Calendar
                        mode='single'
                        selected={date}
                        onSelect={(date)=>{setDate(date); setOpen(false);}}
                        className='rounded-lg border '
                    /></PopoverContent>
                </Popover>



                <Card className='p-4'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='item1' checked />
                        <label htmlFor="item1" className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </label>

                    </div>
                </Card>
                <Card className='p-4'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='item1' />
                        <label htmlFor="item1" className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </label>

                    </div>
                </Card>
                <Card className='p-4'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='item1' />
                        <label htmlFor="item1" className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </label>

                    </div>
                </Card>
                <Card className='p-4'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='item1' />
                        <label htmlFor="item1" className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </label>

                    </div>
                </Card>
                <Card className='p-4'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='item1' />
                        <label htmlFor="item1" className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </label>

                    </div>
                </Card>
                <Card className='p-4'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='item1' />
                        <label htmlFor="item1" className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </label>

                    </div>
                </Card>
                <Card className='p-4'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='item1' />
                        <label htmlFor="item1" className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </label>

                    </div>
                </Card>

            </ScrollArea>
        </div>
    )
}

export default TodoList
