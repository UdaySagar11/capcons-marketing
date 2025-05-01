"use client"

import { parseAsString, useQueryState } from "nuqs"
import { Career } from "@/@types"
import { useMemo } from "react"
import { CategoryButton } from "@/components/common/category-button"
import Link from "next/link"


interface CareerFiltersProps {
  careers: Career[]
}

export function CareerFilters({ careers }: CareerFiltersProps) {
  const [category, setCategory] = useQueryState(
    "category",
    parseAsString.withDefault("")
  )

  const toggleCategory = (selected: string) => {
    setCategory(prev => (prev === selected ? "" : selected))
  }

  const categories = useMemo(() => {
    return Array.from(new Set(careers.map(job => job.category)))
  }, [careers])

  const filteredJobs = useMemo(() => {
    return careers
      .filter(job => {
        const lastStatus = job.status?.[job.status.length - 1]
        return lastStatus?.status?.toLowerCase() === "open"
      })
      .filter(job => !category || job.category === category)
  }, [careers, category])

  return (
    <div className="text-center">
      <h2 className="mb-6 sm:mb-8 font-semibold text-xl sm:text-3xl">
        Make your way to the <span className="text-[#FF9C00]">Capcons</span> family
      </h2>
      <p className="mb-6 text-sm sm:text-lg">In which area do you want to contribute?</p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-16">
        {categories.map((cat) => (
          <CategoryButton
            key={cat}
            label={cat}
            isSelected={category === cat}
            onClick={() => toggleCategory(cat)}
          />
        ))}
      </div>

      {/* Filtered Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-between items-center gap-4 bg-white p-2 sm:p-6 border-b"
          >
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-sm sm:text-lg">{job.title}</h3>
              <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                <span>{job.location}</span>
              </div>
            </div>
            <Link
              href={`/careers/${job.id}`}
              className="bg-[#C6F806] hover:bg-[#C6F806]/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-center text-xs sm:text-sm shrink-0"
            >
              View Details
            </Link>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <div className="text-gray-500 italic py-8">
            No jobs found for the selected category.
          </div>
        )}
      </div>
    </div>
  )
}
