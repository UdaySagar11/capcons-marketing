import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonUI: React.FC = () => {
  return (
    <div className="space-y-4 min-h-screen mx-auto w-full max-w-4xl">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-6 w-2/4 bg-gray-300" />
          <div className="space-y-1">
            {[...Array(3)].map((_, j) => (
              <Skeleton key={j} className="h-4 bg-gray-200" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonUI; 