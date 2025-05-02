"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { getStartedSchema } from "@/lib/schemas/get-started"
import { GetStartedFormValues } from "@/lib/schemas/get-started"
import { submitGetStarted } from "@/lib/actions/get-started"
import { useTransition } from "react"
import { toast } from "sonner"

export const GetStartedForm = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<GetStartedFormValues>({
    resolver: zodResolver(getStartedSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: GetStartedFormValues) {
    if (form.formState.errors.email) {
      toast.error(form.formState.errors.email.message)
      return
    }
    startTransition(async () => {
      const result = await submitGetStarted(data)
      if (result.error) {
        toast.error(result.error)
        return
      }
      toast.success(result.message)
      form.reset()
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center justify-center bg-white mx-auto rounded-full max-w-2xl w-full md:w-4/5 shadow-md">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1 w-full">
              <FormControl>
                <Input
                  className="bg-transparent pl-4 sm:pl-6 lg:pl-10 border-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 sm:h-11 text-xs md:text-sm text-black rounded-full"
                  placeholder="Enter your Email Address"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mr-1"
        >
          <Button
            type="submit"
            className="bg-[#39089D] hover:bg-[#39089D]  px-4 sm:px-8 rounded-full text-white font-bold"
            disabled={isPending}
          >
            {isPending ? "Registering..." : "Register"}
          </Button>
        </motion.div>
      </form>
    </Form>
  )
} 