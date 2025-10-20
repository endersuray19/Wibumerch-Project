"use client"
import React from 'react'
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from './ui/sheet'
import { zodResolver } from "@hookform/resolvers/zod"
import { email, z } from "zod"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 character" }).max(50),
  email: z.string().email({ message: "Invalid email address" }).max(100),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }).max(15),
  location: z.string().min(2, { message: "Location must be at least 2 characters" }).max(100),
  role: z.enum(["admin", "user"], { message: "Role must be one of 'admin', 'user', or 'guest'" }),
})
const EditUser = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'Jon Doe',
      email: 'jondoe@email.com',
      phone: '08672345678',
      location: 'New York',
      role: 'user',
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (

    <SheetContent>
      <SheetHeader>
        <SheetTitle className='font-bold text-lg'>
          Edit  User
        </SheetTitle>
        <SheetDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField control={form.control} name='username' render={({ field }) => (
                <FormItem>
                  <FormLabel>Fullname</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your username, it must be unique.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name='email' render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    Only admin can see your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name='phone' render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your phone number.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name='location' render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your location.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name='location' render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your location.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
              
              <Button type='submit' className='w-full mt-4'>
                Save Changes
              </Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>

  )
}

export default EditUser
