import React from 'react'
import { Blog } from '@/@types'

interface BlogContentProps {
  blog: Blog
}

export const BlogContent: React.FC<BlogContentProps> = ({ blog }) => {
  return (
    <div className="col-span-1 md:col-span-9">
      <div className="space-y-4 text-[#2E134D]">
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  )
} 