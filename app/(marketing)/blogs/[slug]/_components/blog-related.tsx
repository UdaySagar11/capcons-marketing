import Image from "next/image"
import { Button } from "@/components/common/ui/Button"
import { Icons } from "@/lib/icons"
import { RelatedBlog } from "@/@types"
import Link from "next/link"
import { format } from "date-fns"

export const BlogRelated = ({ blogs }: { blogs: RelatedBlog[] }) => {
  if (!blogs.length) return null

  return (
    <div className="my-8 md:my-16">
      <div className="flex md:flex-row flex-col md:justify-between items-center md:items-center md:mb-8">
        <h2 className="mb-4 md:mb-0 font-bold text-[#160925] text-lg md:text-2xl md:text-left text-center">You May also like</h2>
        <Button
          className="hidden md:flex bg-[#C6F806] hover:bg-[#C6F806]/90 text-[#160925] rounded-full"
        >
          See All
          <Icons.arrowRight />
        </Button>
      </div>

      <div className="flex gap-4 md:gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 pb-4 md:pb-0 overflow-x-auto md:overflow-x-visible scrollbar-hide">
        {blogs.map((blog) => (
          <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group min-w-[200px] md:min-w-0 cursor-pointer">
            <div className="relative rounded-xl w-full h-[200px] md:h-[320px] overflow-hidden">
              <Image
                src={blog.banner_image}
                alt={blog.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="right-0 bottom-0 left-0 absolute p-3 md:p-4 md:px-6">
                <h3 className="text-white text-sm md:text-base leading-tight">
                  {blog.title}
                </h3>
                <div className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-white/80 mt-1.5 md:mt-2">
                  <span>{blog.author_name}</span>
                  <span>•</span>
                  <span>{format(new Date(blog.publication_date), 'MMM d, yyyy')}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 