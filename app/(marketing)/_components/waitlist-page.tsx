"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/common/ui/Button'
import { Input } from '@/components/ui/input'
import { H1, P } from '@/components/typography'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

const Waitlist = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className='bg-[#39089D] flex flex-col md:flex-row justify-start items-center relative min-h-[calc(100vh-80px)] py-8 md:py-0'>
      <div className="flex flex-col justify-center px-4 gap-8 container z-10 py-20">
        <div className="max-w-2xl text-left space-y-4">
          <H1 className="text-[#C6F806] text-2xl md:text-3xl lg:text-4xl font-bold">Unlock the Next Era of Social Networking</H1>
          <P className="text-white text-sm md:text-base font-semibold">
            Be among the first to access Capcons and shape the future of creator-led communities.
          </P>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="flex bg-[#D9D9D91A] border border-white/20 rounded-full w-full max-w-[500px]">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        className="bg-transparent border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full placeholder:text-[#A7A7A7] border-[#FFFFFF] text-white"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                variant="primary"
                className="bg-[#C6F806] hover:bg-[#C6F806]/90 text-[#39089D] hover:text-[#39089D]/90 rounded-full px-4 md:px-6 font-bold"
              >
                Submit
              </Button>
            </div>
            <FormField
              control={form.control}
              name="email"
              render={() => (
                <FormItem>
                  <FormMessage className="text-red-400 pl-4" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
      <div className="absolute bottom-0 right-0 w-full md:w-[55%] h-[40vh] md:h-auto">
        <Image
          src="/home-bg.png"
          alt="Background decoration"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  )
}

export default Waitlist