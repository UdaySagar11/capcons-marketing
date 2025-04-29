"use client"

import { motion } from "framer-motion"
import { BannerContent } from "./banner-content"

export const ConnectionsBanner = () => {
  return (
    <div className="relative w-full overflow-x-hidden ">
      <div className="top-12 -right-2 -left-2 absolute overflow-hidden -rotate-3 transform">
        <div className="bg-white border-[#FF9C00] border-y-8 border-dashed">
          <div className="bg-[#5B0EFA] py-4">
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="flex gap-4 md:gap-8 text-white whitespace-nowrap"
              >
                <BannerContent />
                <BannerContent />
                <BannerContent />
                <BannerContent />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-48" />
    </div>
  )
}