import { get_SubWithModules } from "@/app/actions/database";
import Link from "next/link";
// import { v4 } from "uuid";
import { IoMdFolderOpen } from "react-icons/io";

async function ModuleList({
  // branch,
  // sem,
  subject_code,
}: {
  branch: string;
  sem: string;
  subject_code: string;
}) {
  const data = await get_SubWithModules(subject_code);
  // console.log(data);
  const modules_array = data?.module;
  // console.log(modules_array);

  const groupedModules = modules_array?.map((module) => ({
    moduleNo: module.module_no,
    subModules: module.module_url,
    moduleName: module.module_name,
  }));
  console.log(groupedModules);

  const submodule_div = groupedModules?.map((module, index) => (
    <div key={index} className="flex flex-col mx-96">
      <div className="mt-20 text-2xl bg-[#093879] p-5 flex gap-4 rounded-lg">
        <div>Module - {module.moduleNo}</div>
        <div className="">[ {module.moduleName} ]</div>
      </div>
      <div className="flex gap-20 mx-20 bg-[#031730] opacity-100 w-32 mt-10 rounded-xl">
        {module.subModules!.map((subModule, index) => {
          console.log(subModule.url);
          return (
            <Link
              key={index}
              href={subModule.url}
              className="bg-[#031730] w-32 px-3 pb-2 rounded-lg"
            >
              <div className="mt-4">
                <IoMdFolderOpen className="text-8xl" />
              </div>
              <div className="text-center">{subModule.doc_no}</div>
            </Link>
          );
        })}
      </div>
    </div>
  ));

  return (
    <>
      <div className="text-center text-textc dark:text-textc text-2xl pb-4">
        Subject : {data?.subject_name}
      </div>
      <div>{submodule_div}</div>
      {/* <div>{groupedModules}</div> */}
    </>
  );
}
export default ModuleList;
