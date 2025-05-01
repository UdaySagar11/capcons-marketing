import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import { Icons } from '@/lib/icons'
import { ContactForm } from './_components/contact-form'
import { Banner } from '@/components/common/banner'
import { defaultMetadata, siteConfig } from '@/lib/metadata'
import { GetStarted } from '../_components/get-started'
import RoundedBottom from '@/components/common/rounded-bottom'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Contact Capcons | Community Management Support",
  description: "Get in touch with Capcons for community management support. We're here to help creators and brands build, manage, and grow their communities.",
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/contact-us`,
    title: "Contact Capcons | Community Management Support",
    description: "Get in touch with Capcons for community management support. We're here to help creators and brands build, manage, and grow their communities.",
    siteName: siteConfig.name,
    images: [{
      url: siteConfig.ogImage,
    }],
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: "Contact Capcons | Community Management Support",
    description: "Get in touch with Capcons for community management support. We're here to help creators and brands build, manage, and grow their communities.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact-us`,
  },
}

const ContactPage = () => {
  return (
    <div className='bg-transparent '>
      <Banner title="Contact Us" description="Got questions? We’re just a message away." />
      <div className="relative bg-white px-4 pb-0 container sm:px-6 lg:px-8 py-6 sm:py-12 rounded-3xl ">
        <div className="gap-8 lg:gap-10 grid lg:grid-cols-2 py-8 sm:py-12">
          <div className="space-y-4 md:space-y-6">
            <div className="inline-block bg-[#C6F806] px-3 md:px-4 py-1 md:py-1.5 rounded-full font-medium text-xs md:text-sm text-black">
              Contact us
            </div>
            <h2 className="font-bold text-[#400E4D] text-xl sm:text-3xl">We&apos;d love to hear from you</h2>
            <p className="text-[#2E134D] text-xs md:text-base">
              Need something cleared up? Here are our most frequently asked questions.
            </p>

            <div className="space-y-6 md:space-y-8 md:ml-6">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-[#FF9C00] p-1.5 md:p-2 rounded-lg">
                  <Icons.email className="w-4 text-white h-4 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[#400E4D] text-xs md:text-sm">coversations@capcons.com</p>
                  <p className="text-[#2E134D] text-xs md:text-sm">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <div className="bg-[#FF9C00] p-1.5 md:p-2 rounded-lg">
                  <Icons.phone className="w-4 text-white h-4 md:w-6 md:h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Image src="/in.svg" alt="India" width={24} height={16} className="w-5 h-3 md:w-6 md:h-4" />
                    <p className="text-[#400E4D] text-xs md:text-sm">+91- 00000-00000</p>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Image src="/us.svg" alt="USA" width={24} height={16} className="w-5 h-3 md:w-6 md:h-4" />
                    <p className="text-[#400E4D] text-xs md:text-sm">+1 (555) 000-0000</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2 md:gap-3">
                <div className="bg-[#FF9C00] p-1.5 md:p-2 rounded-lg">
                  <Icons.location className="w-4 text-white h-4 md:w-6 md:h-6" />
                </div>
                <div className="space-y-3">
                  <div className="flex gap-x-1.5 md:gap-x-2">
                    <Image src="/in.svg" alt="India" width={24} height={16} className="w-5 h-3 md:w-6 md:h-4" />
                    <p className="text-[#400E4D] -mt-1 text-xs md:text-sm">
                      D 197, Street no.8,
                      Laxmi Nagar,
                      110092,
                      Delhi.
                    </p>
                  </div>
                  <div className="flex gap-x-1.5 md:gap-x-2">
                    <Image src="/us.svg" alt="USA" width={24} height={16} className="w-5 h-3 md:w-6 md:h-4" />
                    <p className="text-[#400E4D] -mt-1 text-xs md:text-sm">
                      651 N Broad St,
                      Suite 206,
                      19709 Middletown,
                      Delaware.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
        <GetStarted />
      </div>
      <RoundedBottom />
    </div>
  )
}

export default ContactPage