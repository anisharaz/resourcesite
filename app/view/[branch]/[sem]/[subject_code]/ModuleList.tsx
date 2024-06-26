import { get_SubWithModules } from "@/app/actions/database";
import Link from "next/link";
import { v4 } from "uuid";

async function ModuleList({
  branch,
  sem,
  subject_code,
}: {
  branch: string;
  sem: string;
  subject_code: string;
}) {
  const data = await get_SubWithModules(subject_code);
  const modules = data?.module;
  const module_div = modules?.map((module) => {
    return (
      <Link
        href={`/view/${branch}/${sem}/${subject_code}/${module.id}`}
        key={v4()}
        className="block max-w-sm p-6 rounded-lg shadow bg-lsec text-textc dark:text-textc dark:bg-dsec/80 border-white hover:border"
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-textc dark:text-textc">
          {"Module " + module.module_number}
        </h5>
        <p className="font-normal text-textc dark:text-textc">
          {"Name: " + module.module_name}
          <br />
          {"Description: " + module.module_description}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#00C25A"
          className="w-6 h-6 text-textc dark:text-textc"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    );
  });
  return (
    <>
      <div className="text-center text-textc dark:text-textc text-2xl pb-4">
        Subject : {data?.subject_name}
      </div>
      <div className=" grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 gap-2">
        {module_div}
      </div>
    </>
  );
}

export default ModuleList;
