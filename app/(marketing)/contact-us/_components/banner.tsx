import { H1, P } from "@/components/typography";

export const Banner = () => {
  return (
    <div className="w-full bg-[#39089D] py-12 sm:py-16 md:py-20">
      <div className="flex flex-col justify-center items-center px-4 gap-8">
        <div className="max-w-2xl text-center space-y-4">
          <H1 className="text-[#C6F806]">Contact Us</H1>
          <P className="text-white">
            Got questions? We’re just a message away.
          </P>
        </div>
      </div>
    </div>
  )
}