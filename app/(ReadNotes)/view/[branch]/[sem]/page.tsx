import { Suspense } from "react";
import SubjectList from "./SubjectList";
import { TileSkeletons } from "@/components/ui/Skeletons";

async function Subjects({
  params,
}: {
  params: Promise<{ branch: string; sem: string }>;
}) {
  const param = await params;
  return (
    <>
      <div
        className="text-textc bg-lpri dark:bg-dpri p-2"
        style={{
          minHeight: "calc(100vh - 52px)",
        }}
      >
        <div className="text-center text-textc dark:text-textc text-2xl">
          Sem : {param.sem}
        </div>
        <br />
        <div className="grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 gap-2">
          <Suspense fallback={<TileSkeletons />}>
            <SubjectList branch={param.branch} sem={parseInt(param.sem)} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Subjects;
