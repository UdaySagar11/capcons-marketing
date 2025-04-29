"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/common/ui";
import { H1, P } from "@/components/typography";

export const Banner = ({ search, setSearch }: { search: string, setSearch: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div className="w-full bg-[#39089D] py-16 sm:py-20 md:py-24">
      <div className="flex flex-col justify-center items-center px-4 gap-8">
        <div className="max-w-2xl text-center space-y-4">
          <H1 className="text-[#C6F806]">Insights</H1>
          <P className="text-white">
            Explore ideas, stories, and expert insights from creators, innovators, and businesses. Stay informed, get inspired, and join the conversation.
          </P>
        </div>
        <div className="flex items-center bg-white border border-white/20 rounded-full w-full max-w-[500px]">
          <Input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-black"
          />
          <Button variant="primary" className="bg-[#C6F806] hover:bg-[#C6F806]/90 text-[#39089D] hover:text-[#39089D]/90 rounded-full px-4 sm:px-6 md:px-8">
            find
          </Button>
        </div>
      </div>
    </div>
  )
}