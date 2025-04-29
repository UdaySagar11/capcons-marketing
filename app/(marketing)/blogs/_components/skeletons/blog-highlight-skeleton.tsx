import React from 'react'

export const BlogHighlightSkeleton = () => (
  <div className="relative w-full aspect-[2.3/1] rounded-2xl overflow-hidden bg-gray-200 animate-pulse">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300" />
    <div className="absolute top-8 left-8 w-24 h-7 bg-white/70 rounded-full" />
    <div className="absolute bottom-20 left-8 w-2/3 h-10 bg-white/80 rounded" />
    <div className="absolute bottom-10 left-8 w-1/2 h-6 bg-white/60 rounded" />
    <div className="absolute bottom-4 left-8 w-20 h-4 bg-white/50 rounded" />
  </div>
) 