"use client"

import { Facebook, Instagram, Twitter, Youtube, LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { BlogPost } from "@/@types"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { blogSubscriptionSchema } from "@/lib/schemas/blog"
import { BlogSubscriptionFormValues } from "@/lib/schemas/blog"
import { subscribeToBlog } from "@/lib/actions/blog"
import { useTransition } from "react"
import { toast } from "sonner"
import { subscriptionForm } from "@/config/mock/blogs"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"

const latestPosts: BlogPost[] = subscriptionForm.latestPosts.posts

const iconMap: Record<string, LucideIcon> = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
}

export const BlogSidebar = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<BlogSubscriptionFormValues>({
    resolver: zodResolver(blogSubscriptionSchema),
    defaultValues: {
      email: "",
      terms: false,
    },
  })

  function onSubmit(data: BlogSubscriptionFormValues) {
    startTransition(async () => {
      const result = await subscribeToBlog(data)
      if (result.error) {
        toast.error(result.error)
        return
      }
      toast.success(result.message)
      form.reset()
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4 bg-[#F9F9F9] p-4 rounded-xl">
        <h3 className="text-[#2E134D] font-semibold text-lg">{subscriptionForm.title}</h3>

        <div className="flex flex-wrap justify-around gap-2 md:gap-4">
          {subscriptionForm.socialLinks.map((link, i) => {
            const Icon = iconMap[link.icon]
            return (
              <div key={i} className="flex flex-col items-center">
                <Icon className="w-5 h-5 text-[#8080808C]" />
                <span className="text-[#4A4A4A] text-sm">{link.count}</span>
              </div>
            )
          })}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={subscriptionForm.form.emailPlaceholder}
                      className="bg-transparent w-full text-black"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-[#39089D] hover:bg-[#39089D]/90 w-full font-semibold text-white"
              disabled={isPending}
            >
              {isPending ? "Subscribing..." : subscriptionForm.form.submitButton}
            </Button>
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="h-4 w-4 text-[#39089D] border-[#39089D] focus:ring-[#39089D] focus:ring-offset-0"
                    />
                  </FormControl>
                  <label htmlFor="terms" className="text-[#4A4A4A] text-xs">
                    {subscriptionForm.form.termsText}
                  </label>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <div className="hidden md:block space-y-4">
        <h3 className="ml-4 text-[#2E134D] font-semibold text-lg">{subscriptionForm.latestPosts.title}</h3>
        <div className="space-y-3 mt-4">
          {latestPosts.map((post, i) => (
            <div
              key={i}
              className={cn(
                "group flex gap-8 justify-between rounded-xl bg-[#F9F9F9] p-4",
                post.isNew && "bg-[#160925] text-white"
              )}
            >
              <div className="flex-1">
                <h4 className={cn("font-medium text-sm", post.isNew ? "text-white" : "text-[#4A4A4A]")}>{post.title}</h4>
                <div className="flex justify-between items-center gap-4 mt-2 text-[#A5A5A5] text-xs">
                  <span>Today</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}