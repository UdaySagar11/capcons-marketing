import React, { Suspense } from "react"
import Image from "next/image"
import { Icons } from "@/lib/icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { getCareerById, getCareers } from "@/lib/actions/careers"
// import { JobApplicationForm } from "@/app/(marketing)/careers/_components/job-application-form"
import RoundedBottom from "@/components/common/rounded-bottom"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { notFound } from "next/navigation"
import { siteConfig } from "@/lib/metadata"
import { FormSection } from "../_components/form-section"


type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  try {
    const career = await getCareerById(id)

    if (!career) return { title: "Job Not Found | CapCons" }

    return {
      title: `${career.title} | CapCons Careers`,
      description: `Apply for ${career.title} at CapCons in ${career.location}. Explore responsibilities, qualifications, and work culture.`,
      openGraph: {
        title: `${career.title} | CapCons Careers`,
        description: `Explore opportunities at CapCons. ${career.title} role available in ${career.location}.`,
        images: [
          {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: "Career Opportunity",
          },
        ],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
          noarchive: true,
          nosnippet: true,
        },
      },
      twitter: {
        card: "summary_large_image",
        title: `${career.title} | CapCons Careers`,
        description: `Apply for ${career.title} at CapCons in ${career.location}. Explore responsibilities, qualifications, and work culture.`,
        images: [
          {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: "Career Opportunity",
          },
        ],
      },
    }
  } catch {
    return { title: "Careers | CapCons" }
  }
}

export default async function CareerDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const career = await getCareerById(id)
  const careers = await getCareers()

  if (!career) {
    return notFound()
  }

  const otherJobs = careers.slice(0, 5)

  return (
    <div className="text-[#2E134D] font-montserrat">
      <div className="bg-[#39089D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-start justify-between gap-2 sm:gap-6">
            {/* Job Info Section */}
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                <Image
                  src="/images/job-logo.png"
                  alt="CapCons"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 space-y-2 sm:space-y-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h1 className="font-semibold text-sm sm:text-2xl lg:text-3xl text-white">{career.title}</h1>
                  <div className="flex items-center gap-1 text-white text-xs sm:text-base">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{career.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-[#F0F0F033] text-[#F5F5F5] rounded-full text-xs sm:text-sm px-2 py-1">
                    {career.jobType}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F0F0F033] text-[#F5F5F5] rounded-full text-xs sm:text-sm px-2 py-1">
                    {career.workMode}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F0F0F033] text-[#F5F5F5] rounded-full text-xs sm:text-sm px-2 py-1">
                    {career.jobTimings.start} - {career.jobTimings.end} {career.jobTimings.timezone}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="#apply-now">
                <Button className="bg-[#C6F806] hover:bg-[#C6F806]/90 rounded-full text-black text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-2 hidden sm:block">
                  Apply Now
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <button className="flex justify-center items-center p-1 border border-[#A5A5A5] rounded-sm hover:bg-white/10 transition-colors">
                  <Icons.bookmark className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </button>
                <button className="flex justify-center items-center p-1 border border-[#A5A5A5] rounded-sm hover:bg-white/10 transition-colors">
                  <Icons.share className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Only Row */}
          <div className="flex sm:hidden mt-4  justify-center">
            <Link href="#apply-now">
              <Button className="bg-[#C6F806] hover:bg-[#C6F806]/90 rounded-full text-black text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-2 w-fit">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-8 md:mt-12 container">
        <div className="flex-1 space-y-6 md:space-y-8">
          <section>
            <h2 className="font-semibold text-[#400E4D] text-lg md:text-xl">About this role</h2>
            <div dangerouslySetInnerHTML={{ __html: career.description }} className="mt-4 font-montserrat gap-4 text-[#2E134D] text-sm md:text-base tracking-wide space-y-4" />

          </section>
          <div id="apply-now">
            {/* <JobApplicationForm jobId={career.id} /> */}

            <Suspense>
              <FormSection />
            </Suspense>
          </div>
        </div>

        <div className="w-full lg:w-[320px]">
          <h3 className="ml-4 font-semibold text-[#400E4D] text-base md:text-lg">Other jobs</h3>

          <div className="space-y-3 mt-4">
            {otherJobs.map((job) => (
              <div
                key={job.id}
                className={cn(
                  "group flex items-center justify-between rounded-xl bg-[#F9F9F9] p-3 md:p-4",
                  job.id === career.id && "bg-[#160925] text-white"
                )}
              >
                <div>
                  <h4 className={cn("font-medium text-sm md:text-base", job.id === career.id ? "text-white" : "text-[#400E4D]")}>{job.title}</h4>
                  <p className={cn("mt-1 md:mt-2 text-[#2E134D] text-xs", job.id === career.id ? "text-white" : "")}>{job.location}</p>
                </div>
                <Link
                  href={`/careers/${job.id}`}
                  className="bg-[#C6F806] hover:bg-[#C6F806]/90 px-3 md:px-4 py-1.5 md:py-2 rounded-full h-7 md:h-8 font-medium text-[#160925] text-xs md:text-sm text-center text-nowrap"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RoundedBottom className="md:h-24" />
    </div>
  )
}