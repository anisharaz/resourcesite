import { Prisma } from "@prisma/client";
import { get_subjects_module } from "../actions/database";
import Link from "next/link";

export default async function Subject_view({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const data_modules = await get_subjects_module(searchParams.subject_code);

  if (data_modules.length == 0) {
    return (
      <div className="text-tert h-screen bg-pri ">
        {"NO Modules For the Subject:" +
          searchParams.subject_name +
          " Subject_code:" +
          searchParams.subject_code}
      </div>
    );
  }

  const modules_name_arr = Object.keys(
    data_modules[0]?.module as Prisma.JsonObject
  );
  const module_path_arr = Object.values(
    data_modules[0]?.module as Prisma.JsonObject
  );

  const module_div = modules_name_arr.map((module_name, index) => {
    if (typeof module_name === "string") {
      return (
        <Link
          href={{
            pathname: "/modules_view",
            query: {
              current_module_name: module_name,
              current_module_path: module_path_arr[index] as string,
              other_modules_path: JSON.stringify(module_path_arr),
              other_modules_name: JSON.stringify(modules_name_arr),
            },
          }}
          key={index}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {"Module " + (index + 1)}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            About: Here are the biggest enterprise technology acquisitions of
            2021 so far, in reverse chronological order.
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      );
    }
    return null;
  });

  return (
    <div className="h-screen bg-pri text-tert">
      <div className="text-tert text-l p-2">
        <p>{"Subject_name: " + searchParams.subject_name}</p>
        <p>{"Subject_code: " + searchParams.subject_code}</p>
      </div>
      <hr className="" />
      <div className="p-2">
        <div className="flex gap-2 flex-col 2xl:flex-row">{module_div}</div>
      </div>
    </div>
  );
}
