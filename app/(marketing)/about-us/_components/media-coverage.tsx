"use client"

import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { NEWS_ITEMS } from "@/config/mock/about-us"
import { useRouter } from "next/navigation"

export const MediaCoverage = () => {
  const router = useRouter()
  return (
    <div className="bg-white px-4 md:px-28 py-10 md:pt-20 container">
      <div className="relative mb-8 md:mb-16">
        <div className="hidden lg:block -top-20 -right-10 absolute">
          <Image
            alt="Team meeting top"
            className="rounded-lg"
            height={350}
            src="/images/coverage/group.png"
            width={350}
          />
        </div>

        <div className="max-w-2xl">
          <h2 className="mb-4 md:mb-6 text-black font-bold text-3xl md:text-5xl">Media Coverage</h2>
          <p className="mb-4 md:mb-6 text-sm md:text-lg text-[#400E4D] font-medium">
            To know more about us, visit our press page for the latest headlines about Capcons, Company announcements and product updates.
          </p>
          <Button
            className="px-0 text-[#39089D]"
            variant="link"
          >
            See news and press
            <MoveRight className="ml-2" />
          </Button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:flex-wrap md:justify-between gap-6 mt-4 max-sm:w-full">
        {NEWS_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            whileHover={{ y: -5 }}
            // todo: add link to the blog post
            onClick={() => router.push(`/blogs/${item.slug}`)}
            className="flex flex-row md:flex-col shadow-md mb-2 rounded-lg md:w-[calc(33.33%-1rem)] lg:w-[calc(33.33%-1.2rem)] overflow-hidden cursor-pointer"
          >
            <motion.div
              className="relative flex-shrink-0 rounded-2xl w-2/5 md:w-full h-28 md:h-40 xl:h-48"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                alt={`News ${index + 1}`}
                className="rounded-lg md:rounded-b-none"
                fill
                src={item.image}
                style={{ objectFit: "cover" }}
              />
            </motion.div>
            <div className="flex flex-col flex-1 justify-between p-1 xs:p-3 md:p-4 pb-2 lg:p-6">
              <p className="font-medium text-black text-xs max-sm:pl-2 md:text-sm lg:text-base">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}