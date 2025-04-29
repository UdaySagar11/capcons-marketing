"use client"

import Image from 'next/image'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { communityImages } from '@/config/mock/landing'
import useAutoScroll from 'embla-carousel-auto-scroll'

export const CommunitySection = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      useAutoScroll({
        speed: 1,
        direction: 'forward',
        stopOnMouseEnter: true,
        stopOnInteraction: false,
        playOnInit: true,
        startDelay: 0
      })
    ]
  )

  const duplicatedImages = [...communityImages, ...communityImages]

  return (
    <div className="mt-32 md:mt-40  px-4 xs:px-6">
      <div
        className="relative overflow-x-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {duplicatedImages.map((url, idx) => (
            <div key={idx} className="flex-[0_0_230px] xl:flex-[0_0_310px] mx-2">
              <Image
                src={url}
                width={200}
                height={400}
                alt="community image"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}