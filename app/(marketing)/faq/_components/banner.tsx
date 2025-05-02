import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { H1, P } from "@/components/typography";

interface OverlayProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export const Banner = ({ searchQuery, setSearchQuery }: OverlayProps) => {
  return (
    <div className="w-full bg-[#39089D] py-8 sm:py-12 md:py-16">
      <div className="flex flex-col justify-center items-center px-4 gap-8">
        <div className="max-w-4xl text-center space-y-4">
          <H1 className="text-[#C6F806]">FAQ&apos;s</H1>
          <P className="text-white">Skip the guessing game—find everything in &quot;Quick Answers&quot;</P>
        </div>
        <div className="flex items-center gap-2 bg-white border border-white rounded-full w-full max-w-[500px]">
          <Input
            type="text"
            placeholder="Search your question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 h-9 sm:h-10 text-black text-base sm:text-lg"
          />
          <Button className="bg-[#C6F806] hover:bg-[#C6F806]/90 px-4 sm:px-6 md:px-8 rounded-full h-9 sm:h-10 font-semibold text-[#39089D] hover:text-[#39089D]/90 text-sm sm:text-base md:text-lg">
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}