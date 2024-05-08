import { get_SubWithModules } from "@/app/actions/database";
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { v4 } from "uuid";

async function Modules({
  params,
}: {
  params: { branch: string; sem: string; subject_code: string };
}) {
  const data = await get_SubWithModules(params.subject_code);
  const modules = data?.module;

  const module_div = modules?.map((module) => {
    const projects = [
      {
        title: "Module " + module.module_number,
        moduleName: module.module_name,
        description: module.module_description,
        link: `/view/${params.branch}/${params.sem}/${params.subject_code}/${module.id}`
      }
    ];
    return (
      <div key={v4()} className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    );
  });

  return (
    <>
      <div
        className="bg-pri p-2"
        style={{
          minHeight: "calc(100vh - 52px)",
        }}
      >
        <div className="text-center text-white text-3xl pt-10 pb-4">
          Subject : {data?.subject_name}
        </div>
        <div>
          {module_div}
        </div>
      </div>
    </>
  );
}

export default Modules