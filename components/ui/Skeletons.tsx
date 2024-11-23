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

export function TileSkeletons() {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <Skeleton className="h-[150px] w-[100%] rounded-xl">
        <div className="flex flex-col gap-4 h-full justify-center p-2">
          <Skeleton className="h-5 max-w-[300px] dark:bg-blue-200 " />
          Loading...
          <Skeleton className="h-5 max-w-[250px] dark:bg-red-200 " />
        </div>
      </Skeleton>
      <Skeleton className="h-[150px] w-[100%] rounded-xl">
        <div className="flex flex-col gap-4 h-full justify-center p-2">
          <Skeleton className="h-5 max-w-[300px] dark:bg-blue-200 " />
          Loading...
          <Skeleton className="h-5 max-w-[250px] dark:bg-red-200 " />
        </div>
      </Skeleton>
    </div>
  );
}
