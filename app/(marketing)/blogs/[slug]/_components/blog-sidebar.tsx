"use client"

import React from 'react'
import { Facebook, Instagram, Twitter, Youtube, LucideIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { AuthorDetails, Blog } from "@/@types"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { blogSubscriptionSchema } from "@/lib/schemas/blog"
import { BlogSubscriptionFormValues } from "@/lib/schemas/blog"
import { subscribeToBlog } from "@/lib/actions/blog"
import { useTransition } from "react"
import { toast } from "sonner"
import { subscriptionForm } from "@/config/mock/blogs"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "@/lib/actions/blog"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const iconMap: Record<string, LucideIcon> = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
}

export const BlogSidebar = ({
  author
}: {
  author: AuthorDetails
}) => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<BlogSubscriptionFormValues>({
    resolver: zodResolver(blogSubscriptionSchema),
    defaultValues: {
      email: "",
      terms: false,
    },
  })

  const { data: latestBlogs } = useQuery({
    queryKey: ["latest-blogs"],
    queryFn: () => getBlogs(),
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
    <div className="space-y-4">
      <div className="hidden md:block space-y-4">
        <h3 className="ml-4 font-semibold text-[#160925] text-lg">About Author</h3>
        <div className="space-y-3 mt-4">

          <div className="space-y-4 bg-[#F9F9F9] p-4 rounded-xl">
            <div className="flex gap-2 md:gap-4">
              <Avatar className="w-10 h-10">
                <AvatarImage src={author.pfp_url} />
                <AvatarFallback>
                  {author.first_name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h4 className="font-medium text-sm text-[#2E134D]">{author.first_name} {author.last_name}</h4>
                <p className="text-[#2E134D] text-xs">{author.user_name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 bg-[#F9F9F9] p-4 rounded-xl">
        <h3 className="font-semibold">{subscriptionForm.title}</h3>

        <div className="flex flex-wrap justify-around gap-2 md:gap-4">
          {subscriptionForm.socialLinks.map((link, i) => {
            const Icon = iconMap[link.icon]
            return (
              <div key={i} className="flex flex-col items-center">
                <Icon className="w-5 h-5 text-[#8080808C]" />
                <span className="text-[#8080808C] text-sm">{link.count}</span>
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
                      className="bg-transparent w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-[#39089D] hover:bg-[#39089D]/90 w-full font-semibold"
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
                    />
                  </FormControl>
                  <label htmlFor="terms" className="text-gray-500 text-xs">
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
        <h3 className="ml-4 font-semibold text-[#160925] text-lg">{subscriptionForm.latestPosts.title}</h3>
        <div className="space-y-3 mt-4">
          {latestBlogs?.slice(0, 4).map((post: Blog, i: number) => (
            <div
              key={i}
              className={cn(
                "group flex gap-8 justify-between rounded-xl bg-[#F9F9F9] p-4",
                i === 0 && "bg-[#160925] text-white"
              )}
            >
              <div className="flex-1">
                <h4 className={cn("font-medium text-sm", i === 0 && "text-white")}>{post.title}</h4>
                <div className="flex justify-between items-center gap-4 mt-2 text-[#A5A5A5] text-xs">
                  <span>{new Date(post.publication_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    2 min read
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 