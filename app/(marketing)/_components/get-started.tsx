"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { GetStartedForm } from "./get-started-form"

export const GetStarted = () => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-background px-4 py-8 sm:py-12 md:py-16 lg:py-20 rounded-lg md:rounded-3xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-white"
        >
          <Image
            src="/images/landing/get-started.png"
            alt="get-started"
            fill
            className="rounded-lg md:rounded-3xl object-cover"
          />
        </motion.div>
        <div className="relative mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 font-bold text-white text-xl sm:text-3xl md:text-5xl"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mb-8 max-w-2xl text-white text-sm sm:text-base font-montserrat"
          >
            Register with Capcons to be the first to know all about what is happening and get
            executive access to all circles before others!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <GetStartedForm />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}