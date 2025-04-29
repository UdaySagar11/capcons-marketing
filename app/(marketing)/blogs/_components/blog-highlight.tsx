import { Blog } from '@/@types'
import Image from 'next/image'
import React, { useCallback, useState, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'
import { BlogChip } from './blog-chip'

export const BlogHighlight = ({ blogs }: { blogs: Blog[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false, stopOnLastSnap: false, stopOnMouseEnter: true })]
  )

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const onInit = useCallback((emblaApi: ReturnType<typeof useEmblaCarousel>[1]) => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect, onInit])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  if (!blogs || blogs.length === 0) return null

  return (
    <div className="relative w-full mb-0">
      <button
        onClick={scrollPrev}
        className="hidden sm:block absolute z-10 left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full shadow p-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous"
        type="button"
        disabled={!prevBtnEnabled}
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="hidden sm:block absolute z-10 right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full shadow p-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next"
        type="button"
        disabled={!nextBtnEnabled}
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      <div ref={emblaRef} className="overflow-hidden rounded-2xl">
        <div className="flex">
          {blogs.map((blog, idx) => (
            <div
              key={blog.slug}
              className="flex-[0_0_100%]"
            >
              <div className="relative w-full aspect-[1.2/1] sm:aspect-[2.3/1] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={blog.banner_image}
                  alt={blog.title}
                  fill
                  className="object-cover w-full h-full"
                  priority={idx === 0}
                  sizes="(max-width: 640px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-8">
                  <div className="mb-2 sm:mb-4">
                    <BlogChip label={(blog.categories_data && blog.categories_data[0]?.name) ?? ""} />
                  </div>
                  <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
                    {blog.title}
                  </h2>
                  <p className="text-white/90 text-xs sm:text-base md:text-lg mb-2 sm:mb-4 max-w-3xl">
                    {blog.summary}
                  </p>
                  <span className="text-white/70 text-xs mt-2">
                    {blog.publication_date ? new Date(blog.publication_date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  )
}
