"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/common/ui/Input"
import { Button } from "@/components/common/ui/Button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { exploreSubscriptionSchema, type ExploreSubscriptionFormValues } from "@/lib/schemas/explore"
import { subscribeToExplore } from "@/lib/actions/explore"
import { useTransition } from "react"
import { toast } from "sonner"
import { motion } from "framer-motion"
import { SocialIcon } from "./social-icon"

interface SocialLink {
  icon: string
  href: string
  label?: string
}

interface SubscriptionFormProps {
  title: string
  socialLinks: SocialLink[]
}

export const SubscriptionForm = ({ title, socialLinks }: SubscriptionFormProps) => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<ExploreSubscriptionFormValues>({
    resolver: zodResolver(exploreSubscriptionSchema),
    defaultValues: {
      email: "",
    },
  })

  const onSubmit = (values: ExploreSubscriptionFormValues) => {
    startTransition(async () => {
      const result = await subscribeToExplore(values)
      if (result.error) {
        toast.error(result.error)
        return
      }
      toast.success(result.message)
      form.reset()
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-between bg-[#39089D] mx-auto p-4 sm:p-6 rounded-xl w-full h-full shadow-lg"
    >
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex flex-col gap-3 sm:gap-4">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold text-white text-base sm:text-xl md:text-2xl"
          >
            {title}
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3 sm:gap-4"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          className="px-3 sm:px-4 text-sm md:text-base rounded-md focus:outline-none focus:ring-2 focus:ring-[#39089D]/50 w-full !bg-white !text-black placeholder:text-black/70 border-transparent transition-all duration-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs md:text-sm text-red-800 font-medium" />
                    </FormItem>
                  )}
                />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isPending}
                    size="lg"
                    className="bg-[#C6F806] cursor-pointer hover:bg-[#C6F806]/90 uppercase w-full text-black text-sm md:text-base transition-all duration-200 shadow-md rounded-full font-bold py-2 sm:py-3"
                  >
                    {isPending ? (
                      <div className="flex items-center justify-center gap-2">
                        <span className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                        <span className="text-xs sm:text-sm">Subscribing...</span>
                      </div>
                    ) : (
                      "SUBSCRIBE"
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 mt-4 sm:mt-6">
        <p className="font-semibold text-white text-xs sm:text-sm md:text-lg">Stay connected with us</p>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-between">
          {socialLinks.map((social) => (
            <div key={social.icon} className="scale-90 sm:scale-100">
              <SocialIcon {...social} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}