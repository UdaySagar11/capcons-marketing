"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { relatedBlogs } from "@/config/mock/landing"

export const RelatedBlogs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white font-montserrat container mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-between items-center mb-4"
      >
        <h2 className="font-bold text-[#400E4D] text-xl sm:text-3xl">Related Blogs</h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/blogs">
            <Button className="bg-[#39089D] hover:bg-[#39089D]/90 rounded-full text-white text-sm sm:text-base transition-colors duration-200">
              View all
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
        {relatedBlogs.map((item, index) => (
          <motion.a
            key={index}
            href="/blogs"
            className="flex flex-col gap-4 cursor-pointer shadow-md rounded-2xl"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1 * (index % 3) }}
            whileHover={{ y: -5 }}
          >
            <div className="rounded-2xl overflow-hidden relative aspect-[384/256]">
              <motion.div
                className="w-full h-full"
              // whileHover={{ scale: 1.05 }}
              // transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.banner_image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="flex flex-col gap-6 px-2 sm:px-4 pb-2 sm:pb-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-sm sm:text-md text-[#2E134D] line-clamp-2">
                  {item.title}
                </h3>
              </div>
              <div className="flex justify-start">
                <Button className="bg-[#C6F806] hover:bg-[#C6F806]/90 rounded-full text-[#400E4D] text-xs md:text-sm transition-colors duration-200">
                  Read Article
                </Button>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}