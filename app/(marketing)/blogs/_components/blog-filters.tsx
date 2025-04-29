'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { FiSearch } from 'react-icons/fi'

interface BlogFiltersProps {
  categories: string[]
  value?: string
  onCategoryChange?: (category: string) => void
  search?: string
  onSearchChange?: (search: string) => void
}

export const BlogFilters: React.FC<BlogFiltersProps> = ({
  categories,
  value = '',
  onCategoryChange,
  search = '',
  onSearchChange
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 w-full border border-white/10 rounded-2xl bg-white/80 px-2 sm:px-4 py-2 sm:py-3">
      <div className="relative w-full max-w-full sm:max-w-xs flex-shrink-0">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
          <FiSearch size={20} />
        </span>
        <input
          type="text"
          value={search}
          onChange={e => onSearchChange?.(e.target.value)}
          placeholder="Search categories"
          className="rounded-full bg-[#D9D9D91A] border border-[#EAEAEA] text-black placeholder:text-neutral-400 pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#FF9C00]/40 transition-all"
        />
      </div>
      <div className="hidden md:flex gap-2 items-center overflow-x-auto scrollbar-hide py-1 flex-shrink-0">
        <Badge
          role="button"
          aria-pressed={value === ''}
          tabIndex={0}
          className={cn(
            'cursor-pointer rounded-full px-6 py-2 text-sm font-medium shadow-sm ring-1 ring-gray-200 transition-colors',
            value === ''
              ? 'bg-[#FF9C00] text-white hover:bg-[#FF9C00]/90'
              : 'bg-transparent text-black border border-white/20'
          )}
          onClick={() => onCategoryChange?.('')}
        >
          All
        </Badge>
        {categories.map(cat => (
          <Badge
            key={cat}
            role="button"
            aria-pressed={value === cat}
            tabIndex={0}
            className={cn(
              'cursor-pointer rounded-full px-6 py-2 text-sm font-medium shadow-sm ring-1 ring-gray-200 transition-colors text-[#400E4D]',
              value === cat
                ? 'bg-[#FF9C00]  hover:bg-[#FF9C00]/90'
                : 'bg-transparent border border-white/20'
            )}
            onClick={() => onCategoryChange?.(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>
    </div>
  )
}