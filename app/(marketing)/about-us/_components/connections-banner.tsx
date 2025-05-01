"use client"

import useEmblaCarousel from "embla-carousel-react"
import useAutoScroll from "embla-carousel-auto-scroll"
import { BannerContent } from "./banner-content"

export const ConnectionsBanner = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      useAutoScroll({
        speed: 1.5,
        direction: 'forward',
        stopOnMouseEnter: false,
        stopOnInteraction: false,
        playOnInit: true,
        startDelay: 0
      })
    ]
  )

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="top-12 -right-2 -left-2 absolute overflow-hidden -rotate-3 transform">
        <div className="bg-white border-[#FF9C00] border-y-8 border-dashed">
          <div className="bg-[#5B0EFA] py-4">
            <div className="relative overflow-hidden">
              <div ref={emblaRef} className="overflow-hidden">
                <div className="flex gap-4 md:gap-8 text-white whitespace-nowrap">
                  <BannerContent />
                  <BannerContent />
                  <BannerContent />
                  <BannerContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-48" />
    </div>
  )
}