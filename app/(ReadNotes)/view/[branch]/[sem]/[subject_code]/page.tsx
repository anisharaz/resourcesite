import { TileSkeletons } from "@/components/ui/Skeletons";
import ModuleList from "./ModuleList";
import { Suspense } from "react";

async function Modules({
  params,
}: {
  params: Promise<{ branch: string; sem: string; subject_code: string }>;
}) {
  const param = await params;
  return (
    <>
      <div
        className="bg-lpri dark:bg-dpri p-2"
        style={{
          minHeight: "calc(100vh - 52px)",
        }}
      >
        <Suspense fallback={<TileSkeletons />}>
          <ModuleList
            branch={param.branch}
            sem={param.sem}
            subject_code={param.subject_code}
          />
        </Suspense>
      </div>
    </>
  );
}

export default Modules;
