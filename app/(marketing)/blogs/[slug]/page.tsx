import React from 'react'
import Image from 'next/image'
import { Facebook } from "lucide-react"
import { Icons } from "@/lib/icons"
import { getBlogBySlug } from "@/lib/actions/blog"
import RoundedBottom from '@/components/common/rounded-bottom'
import { BlogContent } from './_components/blog-content'
import { BlogSidebar } from './_components/blog-sidebar'
import { BlogRelated } from './_components/blog-related'
import { GetStarted } from '../../_components/get-started'
import BlogComments from './_components/blog-comments'
import { H1 } from '@/components/typography'

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = await getBlogBySlug(slug)

  if (!blog) {
    return (
      <div className="flex justify-center items-center py-24 text-2xl text-gray-500">
        Blog not found
      </div>
    )
  }

  return (
    <>
      <div className="p-4 md:px-0 pb-0 md:pb-0 w-full container">
        <H1 className="mx-auto py-4 max-w-2xl font-bold text-2xl sm:text-3xl md:text-4xl text-center text-[#2E134D]">
          {blog.title}
        </H1>
        <div className='mx-auto pb-4 w-full text-[#FF9C00] text-sm text-center'>
          {new Date(blog.publication_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>

        <div className="flex justify-center items-center gap-4 mb-8">
          <Facebook className="w-5 h-5 text-[#8080808C]" />
          <Icons.share className="w-5 h-5 text-[#8080808C]" />
        </div>

        <div className="relative mb-6 md:mb-10 w-full h-[200px] md:h-[300px] lg:h-[400px]">
          <Image
            src={blog.banner_image}
            alt={blog.title}
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="gap-6 md:gap-10 grid grid-cols-1 md:grid-cols-12">
          <BlogContent blog={blog} />
          <div className="col-span-1 md:col-span-3">
            <BlogSidebar author={blog.author_details} />
          </div>
        </div>

        <BlogComments />

        <BlogRelated blogs={blog.related_blogs ?? []} />

        <GetStarted />
      </div>
      <RoundedBottom />
    </>
  )
}