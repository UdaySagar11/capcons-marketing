import Image from "next/image"
import { MissionButton } from "./mission-button"

export const OurMissionSections = () => {
  return (
    <div className="bg-black -mt-28">
      <div className="relative bg-white px-4 sm:px-12 lg:px-32 py-32 pb-12 rounded-t-[30px] md:rounded-t-[50px]">
        <div className="top-0 -left-4 sm:-left-8 absolute w-[140px] md:w-[240px] h-[150px] md:h-[250px] container">
          <Image
            src="/images/our-mission.png"
            alt=""
            className="w-full h-full object-contain"
            width={1000}
            height={1000}
          />
        </div>

        <div className="w-full">
          <div className="flex flex-col gap-4">
            <div className="flex md:flex-row flex-col md:justify-between gap-6 mt-[60px] md:mt-0 max-sm:pl-2">
              <MissionButton />
            </div>
            <p className="text-[#2E134D] text-xs md:text-base">
              Capcons empowers creators, brands, entrepreneurs, and storytellers by building dynamic, interest-based communities on a social networking platform where ambitions spark, ideas are challenged and refined, and growth is driven by gamification.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}