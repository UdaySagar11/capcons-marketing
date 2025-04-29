"use client"

import { useCallback } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import useAutoScroll from "embla-carousel-auto-scroll"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import { testimonials } from "@/config/mock/landing"

export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
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

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="bg-[#39089D] pt-8 sm:pt-12 md:pt-16 ">
        <div className="relative px-4 sm:px-8 pb-8">
          <div className="container mx-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-8 md:mb-12">
              <div>
                <h1 className="mb-4 font-bold text-[#C6F806] text-xl sm:text-2xl md:text-3xl sm:text-left text-center">
                  Testimonials right from the source
                </h1>

                <p className="max-w-3xl font-semibold text-sm sm:text-base text-white/90 sm:text-left text-center leading-relaxed px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="hidden sm:flex gap-2">
                <Button
                  onClick={scrollPrev}
                  variant="outline"
                  size="icon"
                  className="bg-transparent hover:bg-white/10 shadow-sm border-[#A5A5A5] hover:border-white border-2 rounded-full text-[#A5A5A5] hover:text-white transition-colors duration-200"
                >
                  <Icons.arrowLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={scrollNext}
                  variant="outline"
                  size="icon"
                  className="bg-[#FF9C00] hover:bg-[#FF9C00]/90 shadow-md border-0 rounded-full text-white transition-colors duration-200"
                >
                  <Icons.arrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-x-hidden"
            ref={emblaRef}
          >
            <div className="flex py-4">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="relative flex-[0_0_280px] bg-white mr-4 p-4 sm:p-6 rounded-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="mb-4">
                    {testimonial.icon && (
                      <div className="text-[#39089D]">
                        <testimonial.icon className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  <p className="mb-6 text-sm sm:text-md text-gray-600 text-left leading-relaxed font-montserrat">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-3 font-montserrat">
                    <div className="border border-gray-100 rounded-full w-10 h-10 overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm sm:text-md text-gray-900">
                        {testimonial.author}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full py-8 hidden md:block">
        <div className="absolute inset-0 bg-[#39089D] h-[70%]" />
        <div className="absolute inset-0 bg-white h-[30%] top-[70%]" />
        <div className="relative">
          <div className="relative aspect-video md:aspect-[21/9]">
            <Image
              src="/images/landing/testimonials-banner.png"
              alt="Community collage"
              fill
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  )
}