"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
      className="flex flex-col sticky top-4 bg-[#FF9C00] mx-auto px-3 sm:px-5 md:px-8 py-10 md:py-24 rounded-xl w-full max-w-full sm:md:max-w-[400px] min-h-[400px] sm:min-h-[500px] shadow-lg"
    >
      <div className="flex flex-col justify-between h-full flex-1">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-bold text-black text-lg sm:text-xl md:text-2xl"
        >
          {title}
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 flex flex-col justify-center"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="mb-2 md:mb-4 px-4 py-2 h-10 md:h-12 text-sm md:text-base rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39089D]/50 w-full !bg-white !text-black placeholder:text-black/70 border-transparent transition-all duration-200"
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
                  className="bg-[#39089D] cursor-pointer hover:bg-[#39089D]/90 py-2 h-10 md:h-12 rounded-lg w-full font-semibold text-white text-sm md:text-base transition-all duration-200 shadow-md"
                >
                  {isPending ? (
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    "SUBSCRIBE"
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </motion.div>

        <div>
          <p className="mb-4 font-semibold text-black text-sm md:text-lg">Stay connected with us</p>
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((social) => (
              <div key={social.icon}>
                <SocialIcon {...social} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}