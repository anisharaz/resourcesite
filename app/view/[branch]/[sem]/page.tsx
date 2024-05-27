import { Suspense } from "react";
import SubjectList from "./SubjectList";
import { TileSkeletons } from "@/app/components/CompSkeletons";

async function Subjects({
  params,
}: {
  params: { branch: string; sem: string };
}) {
  return (
    <>
      <div
        className="bg-pri p-2"
        style={{
          minHeight: "calc(100vh - 52px)",
        }}
      >
        <div className="text-center text-white text-2xl">
          Sem : {params.sem}
        </div>
        <br />
        <div className=" grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 gap-2">
          <Suspense fallback={<TileSkeletons />}>
            <SubjectList branch={params.branch} sem={parseInt(params.sem)} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Subjects;
