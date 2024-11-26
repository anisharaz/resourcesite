import { TileSkeletons } from "@/components/ui/Skeletons";
import ModuleList from "./ModuleList";
import { Suspense } from "react";
// import ModuleNavbar from "@/components/ui/ModuleNavbar";

async function Modules({
  params,
}: {
  params: Promise<{ branch: string; sem: string; subject_code: string }>;
}) {
  const param = await params;
  // const subjectCode = (await params).subject_code;

  return (
    <>
      <div
        className="p-2"
        style={{
          minHeight: "calc(100vh - 52px)",
        }}
      >
        {/* <ModuleNavbar subject_code={subjectCode} /> */}
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
