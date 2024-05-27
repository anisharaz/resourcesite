import { Skeleton } from "@/components/ui/skeleton";
export function BranchCardSkeletons() {
  return (
    <>
      <div className="flex flex-col space-y-3 items-center">
        <Skeleton className="h-[150px] w-[300px] rounded-xl" />
        <div className="space-y-2 flex flex-col items-center">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 items-center">
        <Skeleton className="h-[150px] w-[300px] rounded-xl" />
        <div className="space-y-2 flex flex-col items-center">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col space-y-3 items-center">
        <Skeleton className="h-[150px] w-[300px] rounded-xl" />
        <div className="space-y-2 flex flex-col items-center">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </>
  );
}
