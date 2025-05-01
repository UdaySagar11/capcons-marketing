import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CategoryButtonProps {
  label: string
  isSelected: boolean
  onClick: () => void
  className?: string
}

export const CategoryButton = ({
  label,
  isSelected,
  onClick,
  className
}: CategoryButtonProps) => {
  return (
    <Badge
      role="button"
      aria-pressed={isSelected}
      tabIndex={0}
      className={cn(
        "cursor-pointer rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-sm ring-1 ring-gray-200 transition-colors capitalize focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9C00]",
        isSelected
          ? "bg-[#FF9C00] text-white hover:bg-[#FF9C00]/90"
          : "text-gray-800 hover:bg-gray-50 border border-[#202020] bg-[#400E4D0D]",
        className
      )}
      onClick={onClick}
    >
      {label}
    </Badge>
  )
} 