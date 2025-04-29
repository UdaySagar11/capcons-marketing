"use client"

import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { BlogCard } from './blog-card'
import { Skeleton } from '@/components/ui/skeleton'
import { Blog } from '@/@types'
import { SectionHeader } from './section-header'

export const BlogList = ({
  isPending,
  filteredBlogs,
  title = "Inventory",
}: {
  isPending: boolean;
  filteredBlogs: Blog[];
  title?: string;
}) => {
  return (
    <div className="flex flex-col">
      <SectionHeader title={title} />
      <AnimatePresence mode="wait">
        {isPending ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="gap-6 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-[#F9F9F9] shadow-sm rounded-2xl overflow-hidden"
              >
                <div className="group">
                  <div className="relative mb-4 rounded-xl overflow-hidden">
                    <Skeleton className="w-full bg-neutral-200 h-[300px]" />
                    <div className="top-4 left-4 absolute">
                      <Skeleton className="h-6 w-24 bg-neutral-200" />
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <Skeleton className="h-7 w-full mb-2 bg-neutral-200" />
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-6 w-6 rounded-full bg-neutral-200" />
                        <Skeleton className="h-4 w-24 bg-neutral-200" />
                        <span className="text-neutral-400 text-sm">•</span>
                        <Skeleton className="h-4 w-20 bg-neutral-200" />
                      </div>
                      <Skeleton className="h-4 w-12 bg-neutral-200" />
                    </div>
                    <Skeleton className="h-9 w-28 rounded-full bg-neutral-200" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : filteredBlogs.length > 0 ? (
          <motion.div
            key="blog-list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="gap-6 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
          >
            {filteredBlogs?.map((blog) => (
              <BlogCard
                key={blog?.slug}
                image={blog?.banner_image}
                title={blog?.title}
                category={blog?.categories_data?.[0]?.name ?? ""}
                author_image={blog?.author_details?.pfp_url ?? ""}
                author={blog?.author_name || "Capcons"}
                publication_date={blog?.publication_date || ""}
                shares={`${blog?.shares || ""}`}
                slug={blog?.slug || ""}
                id={blog?.circle_id || ""}
                description={blog?.summary}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center py-20 w-full col-span-full"
          >
            <p className="text-neutral-400 text-lg">No blogs available</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}