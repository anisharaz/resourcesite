import { TileSkeletons } from "@/app/components/CompSkeletons";
import ModuleList from "./ModuleList";
import { Suspense } from "react";

async function Modules({
  params,
}: {
  params: { branch: string; sem: string; subject_code: string };
}) {
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
            branch={params.branch}
            sem={params.sem}
            subject_code={params.subject_code}
          />
        </Suspense>
      </div>
    </>
  );
}

export default Modules;
