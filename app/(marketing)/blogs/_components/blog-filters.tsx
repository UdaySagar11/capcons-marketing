'use client'

import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { CategoryButton } from '@/components/common/category-button'

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
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 w-full border border-white/10 rounded-2xl bg-white/80 py-2 sm:py-3">
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
        <CategoryButton
          label="All"
          isSelected={value === ''}
          onClick={() => onCategoryChange?.('')}
        />
        {categories.map(cat => (
          <CategoryButton
            key={cat}
            label={cat}
            isSelected={value === cat}
            onClick={() => onCategoryChange?.(cat)}
          />
        ))}
      </div>
    </div>
  )
}