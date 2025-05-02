import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import RoundedBottom from "@/components/common/rounded-bottom"
import { Banner } from "@/components/common/banner"

export default function CareersLoading() {
  return (
    <div className="pb-0 text-[#2E134D]">
      <Banner
        title="Join Our Team"
        description="We're always looking for vibrant, energetic people who love to create and innovate. Be it through their code, words or vision."
      />
      <div className="container mx-auto space-y-12 sm:space-y-16">
        <div className="space-y-4 mt-12 text-center">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-24 w-full max-w-5xl mx-auto" />
        </div>

        <div>
          <Skeleton className="h-8 w-64 mx-auto mb-8" />
          <div className="sm:flex sm:flex-wrap sm:justify-center gap-4 grid grid-cols-2 px-0">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="bg-white shadow-xl border-none sm:w-[250px] py-0">
                <CardContent className="flex flex-col items-start p-4 sm:p-6">
                  <Skeleton className="w-8 h-8 mb-4 mt-2" />
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-16 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Skeleton className="h-8 w-96 mx-auto mb-8" />
          <Skeleton className="h-4 w-64 mx-auto mb-8" />
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-16">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} className="h-8 w-24" />
            ))}
          </div>
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex justify-between items-center gap-4 bg-white p-2 sm:p-6 border-b">
                <div className="flex-1">
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-8 w-24" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Skeleton className="h-4 w-64 mx-auto mb-2" />
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </div>
      <RoundedBottom />
    </div>
  )
} 