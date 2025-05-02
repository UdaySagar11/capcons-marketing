"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { NEWS_ITEMS } from "@/config/mock/about-us"
import { useRouter } from "next/navigation"
import Link from "next/link"

const MobileNewsCard = ({ item, index }: { item: typeof NEWS_ITEMS[0], index: number }) => {
  const router = useRouter()
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
      whileHover={{ y: -5 }}
      onClick={() => router.push(`/media`)}
      className="flex flex-row shadow-md mb-2 rounded-lg overflow-hidden cursor-pointer w-full"
    >
      <motion.div className="relative flex-shrink-0 rounded-2xl w-2/5 h-32">
        <Image
          alt={`News ${index + 1}`}
          className="rounded-lg"
          fill
          src={item.image}
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="flex flex-col flex-1 justify-between p-3 pb-2">
        <p className="font-medium text-black text-sm pl-2">{item.title}</p>
      </div>
    </motion.div>
  )
}

const DesktopNewsCard = ({ item, index }: { item: typeof NEWS_ITEMS[0], index: number }) => {
  const router = useRouter()
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
      whileHover={{ y: -5 }}
      onClick={() => router.push(`/media`)}
      className="flex flex-col shadow-md mb-2 rounded-lg  overflow-hidden cursor-pointer"
    >
      <motion.div className="relative flex-shrink-0 rounded-2xl w-full h-40 xl:h-42">
        <Image
          alt={`News ${index + 1}`}
          className="rounded-lg md:rounded-b-none"
          fill
          src={item.image}
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="flex flex-col flex-1 justify-between p-4 lg:p-6">
        <p className="font-medium text-black text-sm lg:text-base">{item.title}</p>
      </div>
    </motion.div>
  )
}

export const MediaCoverage = () => {
  return (
    <div className="bg-white px-4 md:px-20 py-10 md:pt-20 container">
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
            To know more about us, visit our press page for the latest headlines about Capcons, Company announcements <br /> and product updates.
          </p>
          <Link
            href="/media"
            className="px-0 text-[#39089D] flex items-center gap-2"
          >
            See news and press
            <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between gap-6 mt-4">
        {NEWS_ITEMS.map((item, index) => (
          <div key={index} className="w-full md:w-[calc(33.33%-1rem)] lg:w-[calc(33.33%-1.2rem)]">
            <div className="md:hidden">
              <MobileNewsCard item={item} index={index} />
            </div>
            <div className="hidden md:block">
              <DesktopNewsCard item={item} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}