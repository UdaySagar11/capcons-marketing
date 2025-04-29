import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const OurTeam = () => {

  return (
    <div className="px-2 py-8 md:py-16 lg:pb-24 lg:pt-20 container overflow-hidden">
      <div className="flex md:flex-row flex-col md:justify-around max-w-7xl mx-auto">
        <div className="md:block flex justify-between mb-4 px-2 w-full">
          <div className="relative md:ml-20 lg:ml-28 xl:ml-44 max-w-fit">
            <h2 className="font-bold text-[#2E134D] text-3xl md:text-4xl lg:text-5xl">Our</h2>
            <div className="top-0 right-2 max-xs:top-2 xs:-right-16 absolute">
              <Image
                alt="curved arrow"
                height={50}
                src="/curved-arrow.svg"
                width={100}
                className="max-xs:w-[50px]"
              />
            </div>
            <div className="bg-[#FF9C00] mt-2 p-1 rounded-full max-w-fit">
              <div className="px-6 md:px-10 py-1 border-[3px] border-white border-dashed rounded-full">
                <span className="font-bold text-white text-xl md:text-2xl">TEAM</span>
              </div>
            </div>
          </div>

          <div className="md:hidden w-[68%]">
            <h3 className="md:font-bold text-[#2E134D] text-base md:text-xl text-start">
              Meet our team of{" "}
              <span className="text-[#FF9C00]">creators, designers, geeks</span> and
              world-class <span className="text-[#FF9C00]">problem solvers</span>.
            </h3>
          </div>
        </div>

        <div className="mb-8 px-4 md:px-0 max-w-3xl">
          <h3 className="hidden md:block mb-4 font-bold text-[#2E134D] text-xl md:text-2xl lg:text-3xl">
            Meet our team of{" "}
            <span className="text-[#FF9C00]">creators, designers, geeks</span> and
            world-class <span className="text-[#FF9C00]">problem solvers</span>.
          </h3>
          <p className="text-[#2E134D] text-sm md:text-base font-semibold">
            To create meaning for our customers, it takes an energetic group of
            passionate operators, Get to know the people leading the way at
            Capcons.
          </p>
        </div>
      </div>

      <div className="relative mb-16 w-full">
        <div className="flex md:flex-wrap md:justify-center gap-4 md:gap-8 px-4 xl:px-20 2xl:px-40 pb-6 w-full max-sm:flex-wrap md:overflow-x-visible scrollbar-hide">
          <div className="group relative min-w-[160px] md:min-w-0">
            <div className="relative rounded-full w-40 md:w-72 h-40 md:h-72 overflow-hidden">
              <Image
                alt={`Team member 1`}
                className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                fill
                src={"/images/team/img1.png"}
              />
            </div>

            <div
              className="hidden xl:block top-8 -left-20 absolute bg-[#19C0B69E] rounded-full w-16 h-16"
            />
          </div>
          <div className="group relative min-w-[160px] md:min-w-0">
            <div className="relative rounded-full w-40 md:w-72 h-40 md:h-72 overflow-hidden">
              <Image
                alt={`Team member 2`}
                className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                fill
                src={"/images/team/img2.png"}
              />
            </div>
          </div>
          <div className="group relative min-w-[160px] md:min-w-0">
            <div className="relative rounded-full w-40 md:w-72 h-40 md:h-72 overflow-hidden">
              <Image
                alt={`Team member 3`}
                className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                fill
                src={"/images/team/img3.png"}
              />
            </div>
          </div>
          <div className="group relative min-w-[160px] md:min-w-0">
            <div className="relative rounded-full w-40 md:w-72 h-40 md:h-72 overflow-hidden">
              <Image
                alt={`Team member 4`}
                className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                fill
                src={"/images/team/img4.png"}
              />
            </div>
          </div><div className="group relative min-w-[160px] md:min-w-0">
            <div className="relative rounded-full w-40 md:w-72 h-40 md:h-72 overflow-hidden">
              <Image
                alt={`Team member 5`}
                className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                fill
                src={"/images/team/img5.png"}
              />
            </div>
          </div>
          <div className="group relative min-w-[160px] md:min-w-0">
            <div className="relative rounded-full w-40 md:w-72 h-40 md:h-72 overflow-hidden">
              <Image
                alt={`Team member 6`}
                className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                fill
                src={"/images/team/img6.png"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-4 text-center">
        <p className="mb-6 text-[#2E134D] text-sm md:text-xl font-semibold text-center">
          Be a part of something that creates meaning for you and our team,
          <br className="hidden md:block" />
          if you believe and driven towards our vision & mission.
        </p>
        <Link href="/careers">
          <Button
            className="bg-[#39089D] px-4 border-2 rounded-full text-white text-sm md:text-base"
            variant="outline"
          >
            Join the team
          </Button>
        </Link>
        <Image
          alt="team"
          height={440}
          src="/images/team-bgl.png"
          width={440}
          className="hidden md:block -bottom-40 -left-36 absolute"
        />
        <Image
          alt="team"
          height={300}
          src="/images/team-bgr.png"
          width={300}
          className="hidden md:block -right-28 -bottom-48 absolute "
        />
      </div>

    </div >
  )
}