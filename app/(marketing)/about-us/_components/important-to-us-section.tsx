import { ValueCard } from "./value-card"
import { VALUES } from "@/config/mock/about-us"

export const ImportantToUsSection = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-20 sm:px-4 lg:px-8 md:pt-16 ">
      <div className="mb-12 text-center">
        <h2 className="font-bold text-black text-2xl md:text-4xl">
          What&apos;s <span className="before:absolute relative before:inset-[3px] bg-[#C6F806] px-4 py-1 border-[#2E134D] border-[3px] before:border-[#2E134D] before:border-2 before:border-dashed rounded-full before:rounded-full text-[#2E134D]">Most</span>
          <br className="mt-2" />
          <span className="inline-block before:absolute relative before:inset-[3px] bg-[#C6F806] mt-2 px-6 py-1 border-[#2E134D] border-[3px] before:border-[#2E134D] before:border-2 before:border-dashed rounded-full before:rounded-full text-[#2E134D]">
            Important
          </span>
          <span className="ml-4">to us</span>
        </h2>
      </div>

      <div className="relative w-full container">
        <div className="flex md:flex-wrap md:justify-center gap-8 pb-6 w-full overflow-x-auto md:overflow-x-visible scrollbar-hide">
          {VALUES.map((value) => (
            <ValueCard
              key={value.title}
              title={value.title}
              description={value.description}
              imagePath={value.imagePath}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
