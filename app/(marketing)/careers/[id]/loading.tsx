import { Skeleton } from "@/components/ui/skeleton"
import RoundedBottom from "@/components/common/rounded-bottom"
import { Button } from "@/components/ui/button"

export default function CareerDetailsLoading() {
  return (
    <div className="text-[#2E134D] font-montserrat">
      <div className="bg-[#39089D]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-start justify-between gap-2 sm:gap-6">
            {/* Job Info Section */}
            <div className="flex items-start gap-4 sm:gap-6">
              <Skeleton className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg" />
              <div className="flex-1 space-y-2 sm:space-y-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <Skeleton className="h-6 w-48 sm:w-64" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, index) => (
                    <Skeleton key={index} className="h-6 w-24" />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Button className="bg-[#C6F806] hover:bg-[#C6F806]/90 rounded-full text-black text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-2 hidden sm:block">
                <Skeleton className="h-4 w-20" />
              </Button>
              <div className="flex items-center gap-2">
                <Skeleton className="w-8 h-8 rounded-sm" />
                <Skeleton className="w-8 h-8 rounded-sm" />
              </div>
            </div>
          </div>
          {/* Mobile Only Row */}
          <div className="flex sm:hidden mt-4 justify-center">
            <Button className="bg-[#C6F806] hover:bg-[#C6F806]/90 rounded-full text-black text-xs sm:text-base px-3 sm:px-6 py-1.5 sm:py-2 w-fit">
              <Skeleton className="h-4 w-20" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mt-8 md:mt-12 container">
        <div className="flex-1 space-y-6 md:space-y-8">
          <section>
            <Skeleton className="h-6 w-48 mb-4" />
            <div className="space-y-4">
              {[...Array(6)].map((_, index) => (
                <Skeleton key={index} className="h-4 w-full" />
              ))}
            </div>
          </section>
          <div>
            <Skeleton className="h-8 w-48 mb-4" />
            <div className="space-y-4">
              {[...Array(8)].map((_, index) => (
                <Skeleton key={index} className="h-10 w-full" />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[320px]">
          <Skeleton className="h-6 w-32 ml-4 mb-4" />
          <div className="space-y-3 mt-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center justify-between rounded-xl bg-[#F9F9F9] p-3 md:p-4">
                <div>
                  <Skeleton className="h-5 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-8 w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <RoundedBottom className="md:h-24" />
    </div>
  )
} 