import { Skeleton } from "@/components/ui/skeleton";

export const LatestSectionSkeleton: React.FC = () => (
  <div className="w-full max-w-screen-2xl mx-auto">
    <Skeleton className="h-8 w-48 bg-neutral-200 mb-6" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i}>
          <Skeleton className="h-48 w-full bg-neutral-200 mb-3" />
          <Skeleton className="h-6 w-3/4 bg-neutral-200 mb-2" />
          <Skeleton className="h-4 w-full bg-neutral-200 mb-2" />
          <Skeleton className="h-4 w-1/2 bg-neutral-200" />
        </div>
      ))}
    </div>
  </div>
); 