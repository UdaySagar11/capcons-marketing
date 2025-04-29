import React from 'react'

import { cn } from '@/lib/utils'

export const RoundedBottom = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative bg-[#39089D] h-6 sm:h-8 md:h-24", className)}>
      <div className={cn("absolute bottom-0 z-20 border-none h-6 sm:h-8 md:h-24 w-full rounded-b-[30px] md:rounded-b-[50px] bg-white", className)} />
    </div>
  )
}

export default RoundedBottom