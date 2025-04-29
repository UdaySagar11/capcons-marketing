"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { heroLogos } from "@/config/mock/landing"
import useEmblaCarousel from 'embla-carousel-react'
import useAutoScroll from 'embla-carousel-auto-scroll'

export const HeroSection = () => {
  const [logoCarouselRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: false,
      watchDrag: false
    },
    [
      useAutoScroll({
        speed: 0.8,
        direction: 'forward',
        playOnInit: true,
        startDelay: 0
      })
    ]
  )

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
      className="relative bg-[#39089D]"
    >
      <div className="container mx-auto px-4 md:px-8 pt-16 md:pt-24 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center leading-tight"
          >
            Create More, Grow Faster, and Connect Deeper
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8 max-w-3xl mx-auto text-white text-sm md:text-lg text-center"
          >
            We are creating a world of millions of unique, vibrant communities, led by brands and creators,
            coming together to master something extraordinary.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mt-8 md:mt-12 gap-4"
          >
            <Button
              size="lg"
              className="bg-[#C6F806] hover:bg-[#C6F806]/90 text-black font-semibold rounded-full transition-colors duration-200"
            >
              Start Now
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container md:px-8 pb-16 md:pb-24"
      >
        <div className="mx-auto mt-12 md:mt-16">
          <Image
            src="/images/landing/banner.png"
            alt="Creative community"
            width={1200}
            height={400}
            className="w-full"
            priority
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center items-center w-full overflow-hidden"
          >
            <div className="max-w-[80rem] overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
              <div className="overflow-hidden" ref={logoCarouselRef}>
                <div className="flex items-center">
                  {[...heroLogos, ...heroLogos].map((logo, index) => (
                    <div key={index} className="flex-[0_0_auto] mx-4 md:mx-8">
                      <Image
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        width={120}
                        height={30}
                        className="opacity-80 object-contain h-[60px] md:h-[100px] w-[100px] md:w-[150px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative bg-white mt-16 md:mt-24 lg:mt-32 px-4 md:px-8 lg:px-14 rounded-t-[30px] md:rounded-t-[50px] 2xl:pb-20 ">
        <div className="absolute -top-24 md:-top-28 lg:-top-36 right-0 left-0 flex flex-col md:flex-row px-4 md:px-8 lg:px-16 container mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="hidden lg:block mb-6 lg:mb-0 w-full lg:w-[45%]"
          >
            <Image
              src="/images/landing/creators.png"
              alt="Creative community"
              width={1200}
              height={400}
              className="w-auto max-h-[700px]"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="ml-auto lg:w-1/2"
          >
            <div className="h-6 lg:h-10" />
            <div className="mt-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight text-right"
              >
                Complete
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-1 text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight text-right"
              >
                Community Platform
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-1 text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight text-right"
              >
                for <span className="text-[#FF9C00]">Creators</span> and Brands
              </motion.h2>
            </div>
            <p className="mt-4 lg:mt-8 max-xs:max-w-[360px] text-black text-sm xs:text-base lg:text-xl text-right">
              Build a home for your community, events, and{" "}
              <br className="hidden lg:block" />
              courses — all under your own brand.
            </p>
            <div className="flex justify-end mt-4 lg:mt-8">
              <Button className="bg-[#39089D] hover:bg-[#39089D]/90 text-white font-semibold rounded-full transition-colors duration-200">
                Know more
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="h-[50px] lg:h-[200px] xl:h-[340px]"></div>
      </div>
    </motion.div>
  )
}