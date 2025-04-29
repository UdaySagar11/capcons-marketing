import { Metadata } from 'next'
import { ConnectionsBanner } from "./_components/connections-banner"
import { HeroSection } from "./_components/hero-section"
import { ImportantToUsSection } from "./_components/important-to-us-section"
import { MediaCoverage } from "./_components/media-coverage"
import { OurMissionSections } from "./_components/our-mission"
import { OurTeam } from "./_components/our-team"
import RoundedBottom from "@/components/common/rounded-bottom"
import { defaultMetadata, siteConfig } from '@/lib/metadata'
import { GetStarted } from '../_components/get-started'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "About Capcons | Empowering Creators & Brands",
  description: "Capcons empowers creators & brands to build, manage, and monetize branded communities, fostering engagement and growth.",
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/about-us`,
    title: "About Capcons | Empowering Creators & Brands",
    description: "Capcons empowers creators & brands to build, manage, and monetize branded communities, fostering engagement and growth.",
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
    }],
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "About Capcons | Empowering Creators & Brands",
    description: "Capcons empowers creators & brands to build, manage, and monetize branded communities, fostering engagement and growth.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/about-us`,
  },
}

const MarketingPage = () => {
  return (
    <>
      <HeroSection />
      <div className="bg-white">
        <OurMissionSections />
        <ConnectionsBanner />
        <ImportantToUsSection />
        <OurTeam />
        <MediaCoverage />
        <GetStarted />
        <RoundedBottom />
      </div>
    </>
  )
}

export default MarketingPage