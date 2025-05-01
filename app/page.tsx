import { Metadata } from 'next'
// import { HeroSection } from "./_components/hero-section"
// import { CommunitySection } from "./_components/community-section"
// import { Features } from "./_components/features"
// import { Overview } from "./_components/overview"
// import { RelatedBlogs } from "./_components/related-blogs"
// import { GetStarted } from "./_components/get-started"
// import { Testimonials } from "./_components/testimonials"
// import RoundedBottom from "@/components/common/rounded-bottom"
import { defaultMetadata, siteConfig } from '@/lib/metadata'
import Waitlist from './(marketing)/_components/waitlist-page'
import { Navbar } from '@/components/common/navbar'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Capcons | Empowering Creators and Communities",
  description: siteConfig.description,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Capcons - Empowering Creators and Communities",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
    }],
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "Capcons - Empowering Creators and Communities",
    description: siteConfig.description,
    images: ["https://storage.googleapis.com/capcons.com/capcons-web/opengraph-image.webp"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

const LandingPage = () => {

  return (
    <div className='bg-[#39089D] h-screen overflow-hidden'>
      <Navbar />
      <Waitlist />
    </div>
  )

  // return (
  // <div className='space-y-12 md:space-y-20 overflow-hidden'>
  //   <HeroSection />
  //   <CommunitySection />
  //   <Features />
  //   <Overview />
  //   <Testimonials />
  //   <GetStarted />
  //   <RelatedBlogs />
  //   <RoundedBottom />
  // </div>
  // )
}

export default LandingPage