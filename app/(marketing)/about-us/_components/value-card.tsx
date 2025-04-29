import { ValueItem } from "@/@types"
import Image from "next/image"

export const ValueCard = (
  { title, description, imagePath }: ValueItem) => {
  return (
    <div className="flex flex-col gap-4 bg-[#F9F9F9] rounded-lg md:w-[270px] min-w-[270px] h-[300px]">
      <h3 className="p-3 sm:p-4 px-4 sm:pb-0 font-semibold text-black text-xl">{title}</h3>
      <p className="px-4 pb-2 text-muted-foreground text-sm line-clamp-3">{description}</p>
      <div className="relative mt-auto rounded-lg w-full h-40 overflow-hidden">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
} 