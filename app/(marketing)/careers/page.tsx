import { Metadata } from 'next'
import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/lib/icons"
import { perks } from "@/config/mock/careers"
import { getCareers } from "@/lib/actions/careers"
import { CareerFilters } from "./_components/career-filters"
import RoundedBottom from "@/components/common/rounded-bottom"
import { defaultMetadata, siteConfig } from '@/lib/metadata'
import { Banner } from "@/components/common/banner"
import { GetStarted } from '../_components/get-started'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Careers at Capcons | Join Us in Empowering Creators",
  description: "Explore careers at Capcons! Join our mission to help creators and brands build, manage, and monetize thriving communities.",
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/careers`,
    title: "Careers at Capcons | Join Us in Empowering Creators",
    description: "Explore careers at Capcons! Join our mission to help creators and brands build, manage, and monetize thriving communities.",
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
    }],
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "Careers at Capcons | Join Us in Empowering Creators",
    description: "Explore careers at Capcons! Join our mission to help creators and brands build, manage, and monetize thriving communities.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/careers`,
  },
}

export const revalidate = 21600 // 6 hr

export default async function CareerPage() {
  const careers = await getCareers();

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons]
    return Icon ? <Icon className="w-5 sm:w-8 h-5 sm:h-8 text-[#FF9C00]" /> : null
  }

  return (
    <div className="pb-0 text-[#2E134D]">
      <Banner
        title="Join Our Team"
        description="We're always looking for vibrant, energetic people who love to create and innovate. Be it through their code, words or vision."
      />
      <div className="container mx-auto space-y-12 sm:space-y-16">
        <div className="space-y-4 mt-12 text-center">
          <h1 className="font-bold text-[#2E134D] text-xl sm:text-4xl tracking-tight">Our work policy</h1>
          <p className="text-[#2E134D] text-sm sm:text-base max-w-5xl mx-auto">
            If you love what you do, you should love where you do it. We appreciate that everyone&apos;s different and has their own preferences of where and how to work.
            We genuinely believe in the power of regular face-to-face interactions in building close connections with our teams, but we also strongly believe people can
            work effectively remotely. This means that combining both is the key to success.
          </p>
        </div>

        <div>
          <h2 className=" font-bold text-[#2E134D] text-xl sm:text-4xl tracking-tight text-center">Perks and Benefits</h2>
          <div className="sm:flex sm:flex-wrap sm:justify-center gap-4 grid grid-cols-2 px-0">
            {perks.map((perk, index) => (
              <Card key={index} className="bg-white shadow-xl border-none sm:w-[250px] py-0">
                <CardContent className="flex flex-col items-start p-4 sm:p-6">
                  <div className="mb-4 mt-2">
                    {getIcon(perk.icon)}
                  </div>
                  <h3 className="mb-2 font-semibold text-sm sm:text-lg text-[#2E134D]">{perk.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <CareerFilters careers={careers} />


        <div className="text-center">
          <p className="mb-2 text-sm md:text-base">Not able to find what you are looking for?</p>
          <a
            href="mailto:careers@capcons.com"
            className="text-[#FF9C00] hover:underline text-sm md:text-base"
          >
            careers@capcons.com
          </a>
        </div>
        <GetStarted />
      </div>
      <RoundedBottom />
    </div>
  )
}
