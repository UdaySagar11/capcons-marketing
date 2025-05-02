import { CirclePlay } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/common/ui/Button"

interface VideoCardProps {
  title: string
  description: string
  duration: string
  imageUrl: string
  href: string
  category: string
}

export const VideoCard = ({
  title,
  description,
  duration,
  imageUrl,
  href
}: VideoCardProps) => {
  return (
    <Link
      href={href}
      className="block w-full overflow-hidden rounded-2xl bg-[#F8F8F8] transition-all hover:shadow-lg"
    >
      <Image
        src={imageUrl}
        alt={title}
        width={1000}
        height={1000}
        className="object-cover rounded-t-2xl w-full"
      />
      <div className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <h3 className="text-base sm:text-base lg:text-lg font-bold text-gray-900">{title}</h3>
            <p className="text-xs sm:text-sm text-gray-500">{description}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-xs text-[#39089D]">{duration}</span>
            </div>
          </div>
          <Button className="rounded-full bg-[#39089D] px-2.5 py-1 text-xs sm:text-xs lg:text-sm text-white flex items-center gap-1 sm:gap-1.5 hover:bg-[#39089D] w-fit mx-auto sm:mx-0">
            <CirclePlay className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Watch Now
          </Button>
        </div>
      </div>
    </Link>
  )
}