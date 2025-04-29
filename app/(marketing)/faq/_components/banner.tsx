import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface OverlayProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const Banner = ({ searchQuery, setSearchQuery }: OverlayProps) => {
  return (
    <div className="relative w-full h-[60vh] max-h-[700px]">
      <Image
        src="/images/blogs/blog-listing-banner.png"
        width={1000}
        height={1000}
        alt="Capcons"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
        <div className="max-w-2xl text-center">
          <h1 className="mb-3 sm:mb-4 font-bold text-[#C6F806] text-2xl sm:text-3xl md:text-5xl">FAQ&apos;s</h1>
          <p className="mb-4 sm:mb-6 text-white text-sm sm:text-base md:text-xl">
            Skip the guessing game—find everything in &quot;Quick Answers&quot;
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#D9D9D91A] border border-[#D9D9D91A] rounded-full w-full max-w-[500px]">
          <Input
            type="text"
            placeholder="Search your question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 h-9 sm:h-10 text-white text-base sm:text-lg"
          />
          <Button className="bg-[#C6F806] hover:bg-[#C6F806]/90 px-4 sm:px-6 md:px-8 rounded-full h-9 sm:h-10 font-semibold text-[#39089D] hover:text-[#39089D]/90 text-sm sm:text-base md:text-lg">
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}