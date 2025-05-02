"use client"

import { useQueryState } from 'nuqs'
import { CategoryButton } from '@/components/common/category-button'

export const VideoFilters = () => {
  const [selectedFilter, setSelectedFilter] = useQueryState('filter', {
    defaultValue: 'All',
    parse: (value) => value,
    serialize: (value) => value,
  })

  const filters = ['All', 'Circles', 'Courses', 'Customization', 'Advanced']

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((filter) => (
        <CategoryButton
          key={filter}
          label={filter}
          isSelected={selectedFilter === filter}
          onClick={() => setSelectedFilter(filter)}
        />
      ))}
    </div>
  )
}