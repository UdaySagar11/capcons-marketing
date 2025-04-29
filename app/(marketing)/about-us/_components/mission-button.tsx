import Image from "next/image"
import { Button } from "@/components/ui/button"


export const MissionButton = () => (
  <div className="relative">
    <Button
      className="relative bg-[#5B0EFA] hover:bg-[#5B0EFA]/80 text-xs md:text-base px-4 md:px-6 py-2 md:py-4 rounded-full font-semibold text-white transition-transform hover:translate-x-0 hover:translate-y-0 active:translate-x-1 active:translate-y-1 h-8 md:h-12"
      style={{
        boxShadow: "3px 3px 0 0 #2E134D",
        border: "2px solid #2E134D"
      }}
    >
      Read Our Mission
    </Button>
    <div className="-top-12 -left-12 absolute  w-[80px] h-[80px]">
      <Image
        src="/button-spark.svg"
        alt=""
        width={1000}
        height={1000}
      />
    </div>
  </div>
) 