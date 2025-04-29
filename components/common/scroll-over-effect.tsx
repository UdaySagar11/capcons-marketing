import React from 'react'
import { cn } from '@/lib/utils'

interface ScrollOverEffectProps {
  children: React.ReactNode
  overlay: React.ReactNode
  className?: string
}

const ScrollOverEffect = ({ children, overlay, className = '' }: ScrollOverEffectProps) => {
  return (
    <div className="relative">
      <div className="sticky top-0 z-0">
        <div className='h-auto'>
          {overlay}
        </div>
      </div>
      <div className={cn("relative z-[99999999] bg-white", className)}>
        {children}
      </div>
    </div>
  )
}

export default ScrollOverEffect 