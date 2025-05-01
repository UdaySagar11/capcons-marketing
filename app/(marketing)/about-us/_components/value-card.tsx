import { ValueItem } from "@/@types"
import Image from "next/image"

export const ValueCard = (
  { title, description, imagePath }: ValueItem) => {
  return (
    <div className="flex flex-col gap-2 bg-[#F9F9F9] rounded-lg md:w-[250px] 2xl:w-[280px] min-w-[250px] h-auto">
      <h3 className="px-4 pt-4 font-semibold text-black text-xl">{title}</h3>
      <p className="px-4 text-muted-foreground text-sm ">{description}</p>
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