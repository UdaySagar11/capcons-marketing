import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-4 md:px-20 pt-20 pb-0 md:pb-0 w-full">
      <Skeleton className="h-8 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-1/4 mx-auto mt-4" />
      <Skeleton className="h-[300px] w-full mt-8" />
      <div className="gap-6 md:gap-10 grid grid-cols-1 md:grid-cols-12 mt-8">
        <div className="col-span-1 md:col-span-9">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6 mt-4" />
          <Skeleton className="h-4 w-4/6 mt-4" />
        </div>
        <div className="col-span-1 md:col-span-3">
          <Skeleton className="h-[200px] w-full" />
        </div>
      </div>
    </div>
  )
}
