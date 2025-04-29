import React, { Suspense } from "react"
import Image from "next/image"
import { Icons } from "@/lib/icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { getCareerById, getCareers } from "@/lib/actions/careers"
import { JobApplicationForm } from "@/app/(marketing)/careers/_components/job-application-form"
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
      <Image
        src="/images/carrer-detail-banner.png"
        alt="career-banner"
        width={1000}
        height={100}
        className="w-full object-contain"
      />
      <div className="container mx-auto px-3 md:px-8 lg:px-20 py-2 md:py-8">
        <h1 className="mb-2 md:mb-6 font-bold text-[#400E4D] text-lg md:text-4xl">{career.title}</h1>

        <div className="flex md:flex-row flex-col md:justify-between md:items-start gap-2 md:gap-0">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="bg-white rounded-lg flex-shrink-0 w-10 h-10 md:w-40 md:h-40 flex items-center justify-center">
                <Image
                  src="/images/job-logo.png"
                  alt="CapCons"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
                  <span className="font-semibold sm:font-bold text-sm md:text-2xl text-[#400E4D]">CapCons</span>
                  <span className="text-[#2E134D] text-sm md:text-base">•</span>
                  <span className="text-[#A5A5A5] text-xs md:text-base flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {career.location}
                  </span>
                </div>

                <div className="md:hidden flex flex-wrap gap-1 mt-1">
                  <Badge variant="secondary" className="bg-[#F0F0F0] text-[#A5A5A5] text-[10px] px-2 py-0.5">
                    {career.jobType}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F0F0F0] text-[#A5A5A5] text-[10px] px-2 py-0.5">
                    {career.workMode}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F0F0F0] text-[#A5A5A5] text-[10px] px-2 py-0.5">
                    {career.jobTimings.start} - {career.jobTimings.end} {career.jobTimings.timezone}
                  </Badge>
                </div>

                <div className="hidden md:flex flex-wrap gap-2 md:gap-4 mt-4">
                  <Badge variant="secondary" className="bg-[#F0F0F0] text-[#A5A5A5] text-sm">
                    {career.jobType}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F0F0F0] text-[#A5A5A5] text-sm">
                    {career.workMode}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#F0F0F0] text-[#A5A5A5] text-sm">
                    {career.jobTimings.start} - {career.jobTimings.end} {career.jobTimings.timezone}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 md:gap-4 ml-auto">
              <Link href="#apply-now">
                <Button className="max-md:hidden bg-[#39089D] hover:bg-[#39089D]/90 rounded-full text-white text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2">
                  Apply Now
                </Button>
              </Link>
              <button className="flex justify-center items-center p-0.5 md:p-1 border border-[#A5A5A5] rounded-sm">
                <Icons.bookmark className="w-3 md:w-6 h-3 md:h-6 text-[#A5A5A5]" />
              </button>
              <button className="flex justify-center items-center p-0.5 md:p-1 border border-[#A5A5A5] rounded-sm">
                <Icons.share className="w-3 md:w-6 h-3 md:h-6 text-[#A5A5A5]" />
              </button>
            </div>
          </div>

          <div className="md:hidden flex justify-end w-full">
            <Link href="#apply-now">
              <Button className="bg-[#C6F806] hover:bg-[#C6F806]/90 mx-auto rounded-full text-[10px] px-3 py-1 text-black h-6">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col gap-6 md:gap-8 mt-8 md:mt-12">
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
      </div >
      <RoundedBottom className="md:h-24" />
    </div >
  )
}