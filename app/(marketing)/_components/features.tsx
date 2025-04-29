"use client"

import React, { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { CATEGORIES } from "@/config/mock/landing"

export const Features = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id)

  const activeCategoryData = CATEGORIES.find(cat => cat.id === activeCategory)
  const activeImage = activeCategoryData?.image

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto max-w-2xl font-bold text-[#39089D] text-xl sm:text-3xl md:text-4xl text-center"
      >
        Integrate, Monetize, and Navigate
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[#39089D] text-sm sm:text-base md:text-lg text-center font-medium"
      >
        All in One Place for Your Community
      </motion.p>

      <div className="w-full mx-auto mt-6 sm:mt-8">
        <div className="flex justify-center items-center gap-1 sm:gap-4 mb-6 sm:mb-8 md:mb-12 flex-wrap">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-md mb-2 px-2 py-1.5 sm:px-6 sm:py-2 text-[12px] sm:text-sm whitespace-nowrap font-medium cursor-pointer sm:uppercase",
                activeCategory === category.id
                  ? "text-[#39089D] md:shadow-md border-[#39089D] bg-[#39089D33]"
                  : "text-[#A5A5A5] md:hover:bg-gray-200"
              )}
            >
              {category.label}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          <div className="lg:order-2 relative rounded-lg w-full aspect-video overflow-hidden">
            {activeImage && (
              <Image
                src={activeImage}
                alt="Feature illustration"
                fill
                className="object-contain"
                priority
              />
            )}
          </div>

          <div className="lg:order-1 flex flex-col justify-center space-y-3 sm:space-y-4 bg-[#F6F6F6] p-4 sm:p-6 rounded-lg h-fit">
            <h3 className="font-bold text-[#39089D] text-md sm:text-xl md:text-2xl">
              {activeCategoryData?.description.title}
            </h3>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg font-montserrat">
              {activeCategoryData?.description.content}
            </p>

            <motion.button
              className="text-[#39089D] text-sm sm:text-base md:text-lg hover:underline font-montserrat text-left transition-colors"
            >
              Know More
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  )
}