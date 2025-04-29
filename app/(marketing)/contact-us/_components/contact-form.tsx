'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas/contact"
import { submitContactForm } from "@/lib/actions/contact"
import { useTransition } from "react"
import { toast } from "sonner"
import { PhoneInputComponent } from './phone-input'

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      description: '',
      notes: '',
      privacy: false,
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    startTransition(async () => {
      const result = await submitContactForm(values)
      if (result?.error) {
        toast.error(result.error)
        return
      }
      toast.success(result?.message || "Message sent successfully")
      form.reset()
    })
  }

  return (
    <div className="space-y-3 md:space-y-4 text-[#400E4D]">
      <h3 className="font-semibold text-[#400E4D] text-lg sm:text-2xl">Get in touch</h3>
      <p className="text-[#2E134D] text-xs sm:text-base">We&apos;d love to hear from you. Please fill out this form.</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
          <div className="gap-2 md:gap-4 grid grid-cols-2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs md:text-base text-[#400E4D]">First name</FormLabel>
                  <FormControl>
                    <Input placeholder="First name" className="h-8 md:h-10 px-3 py-1 md:py-2 text-xs md:text-base placeholder:text-xs md:placeholder:text-base bg-white text-[#400E4D] focus:text-[#400E4D] active:text-[#400E4D] border border-gray-200" {...field} />
                  </FormControl>
                  <FormMessage className="text-[10px] md:text-sm" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs md:text-base text-[#400E4D]">Last name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last name" className="h-8 md:h-10 px-3 py-1 md:py-2 text-xs md:text-base placeholder:text-xs md:placeholder:text-base bg-white text-[#400E4D] focus:text-[#400E4D] active:text-[#400E4D] border border-gray-200" {...field} />
                  </FormControl>
                  <FormMessage className="text-[10px] md:text-sm" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base text-[#400E4D]">Phone number</FormLabel>
                <FormControl>
                  <div className="h-8 md:h-10">
                    <PhoneInputComponent
                      value={field.value}
                      onChange={field.onChange}
                      placeholder="Enter your phone number"
                      className="h-full text-xs md:text-base bg-white text-[#400E4D] focus:text-[#400E4D] active:text-[#400E4D]"
                      error={!!form.formState.errors.phone}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-[10px] md:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base text-[#400E4D]">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@company.com" className="h-8 md:h-10 px-3 py-1 md:py-2 text-xs md:text-base placeholder:text-xs md:placeholder:text-base bg-white text-[#400E4D] focus:text-[#400E4D] active:text-[#400E4D] border border-gray-200" {...field} />
                </FormControl>
                <FormMessage className="text-[10px] md:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base text-[#400E4D]">Purpose</FormLabel>
                <FormControl>
                  <Input placeholder="Your intent" className="h-8 md:h-10 px-3 py-1 md:py-2 text-xs md:text-base placeholder:text-xs md:placeholder:text-base bg-white text-[#400E4D] focus:text-[#400E4D] active:text-[#400E4D] border border-gray-200" {...field} />
                </FormControl>
                <FormMessage className="text-[10px] md:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="notes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs md:text-base text-[#400E4D]">Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Leave us a message..." rows={4} className="min-h-[80px] md:min-h-[100px] px-3 py-1.5 md:py-2 text-xs md:text-base placeholder:text-xs md:placeholder:text-base resize-none bg-white text-[#400E4D] focus:text-[#400E4D] active:text-[#400E4D] border border-gray-200" {...field} />
                </FormControl>
                <FormMessage className="text-[10px] md:text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="h-4 w-4 md:h-5 md:w-5 border border-gray-200"
                  />
                </FormControl>
                <FormLabel className="text-[#2E134D] text-xs md:text-sm">
                  You agree to our friendly privacy policy.
                </FormLabel>
                <FormMessage className="text-[10px] md:text-sm" />
              </FormItem>
            )}
          />

          <div className="flex justify-center mt-3 md:mt-6">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-[#39089D] hover:bg-[#39089D]/90 text-white mx-auto rounded-full md:w-full h-8 md:h-10 px-4 md:px-8 text-xs md:text-base transition-all duration-200"
            >
              {isPending ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}