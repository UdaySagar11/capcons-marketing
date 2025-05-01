import { H1, P } from "@/components/typography";

export const Banner = ({
  title,
  description,
  subtitle,
}: {
  title: string;
  description: string;
  subtitle?: string;
}) => {
  return (
    <div className="w-full bg-[#39089D] py-8 sm:py-12 md:py-16">
      <div className="flex flex-col justify-center items-center px-4 gap-8">
        <div className="max-w-4xl text-center space-y-4">
          <H1 className="text-[#C6F806]">{title}</H1>
          <P className="text-white">{description}</P>
          {subtitle && <P className="text-[#A5A5A5] text-sm">{subtitle}</P>}
        </div>
      </div>
    </div>
  )
}