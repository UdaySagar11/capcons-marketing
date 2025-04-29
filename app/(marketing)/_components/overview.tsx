"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { OVERVIEW_FEATURES } from "@/config/mock/landing"

export const Overview = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container"
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
        className="mx-auto mt-2 sm:mt-3 max-w-2xl text-[#39089D] text-sm sm:text-base md:text-lg text-center font-medium mb-8"
      >
        All in One Place for Your Community
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full rounded-lg max-sm:mt-6"
        >
          <Image
            src="/images/landing/overview.png"
            alt="Overview"
            width={1920}
            height={1080}
            className="w-full h-auto scale-150"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col justify-center gap-4"
        >
          {OVERVIEW_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              className="flex items-start gap-4 bg-[#82B3FF2E] p-2 sm:p-4 rounded-lg text-[#2E134D]"
            >
              <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#2E134D] mt-1" />
              <div className="flex-1">
                <h3 className="font-bold text-md sm:text-xl md:text-2xl">{feature.title}</h3>
                <p className="text-sm sm:text-base md:text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="flex justify-center"
          >
            <Button
              className="bg-[#39089D] hover:bg-[#39089D]/90 rounded-full text-white text-sm sm:text-base md:text-lg transition-colors duration-200"
            >
              Know more
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
