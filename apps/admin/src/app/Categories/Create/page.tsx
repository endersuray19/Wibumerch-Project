
import { FormField,Form, FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'

const CreateCategories = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8 gap-4'>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-2 2xl:col-span-2">
        <h1 className='font-bold'>Create Category</h1>
        <form action="">
          
        </form>
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-2 2xl:col-span-2">
        <h1 className='font-bold'>Image Category</h1>

      </div>
    </div>
  )
}

export default CreateCategories
