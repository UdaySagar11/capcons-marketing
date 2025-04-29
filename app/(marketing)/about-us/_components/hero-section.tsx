export const HeroSection = () => {
  return (
    <div className="relative w-full h-[70vh] md:h-[90vh]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#39089D] to-violet-600" />

      {/* <div className="absolute inset-0">
        <Image
          alt="Wave Pattern"
          className="w-full h-full object-cover"
          fill
          priority
          src="/wave-pattern.png"
        />
      </div> */}

      <div className="z-10 relative flex flex-col justify-center items-center gap-3 md:gap-4 px-4 sm:px-6 lg:px-8 pb-20 md:pb-28 h-full">
        <button className="bg-[#86868645] px-3 md:px-4 py-1.5 md:py-2 rounded-full font-semibold text-white text-xs md:text-base">
          Our Vision
        </button>
        <h1 className="max-w-4xl font-extrabold text-white text-xl md:text-4xl text-center tracking-tight leading-relaxed md:leading-normal">
          &quot;To inspire and empower <span className="text-[#C6F806]">creators</span>,{" "}
          <span className="text-[#C6F806]">entrepreneurs</span>, and{" "}
          <span className="text-[#C6F806]">storytellers</span> as the
          world&apos;s largest incubator and accelerator
          of impactful ideas.&quot;
        </h1>
      </div>
    </div>
  )
} 