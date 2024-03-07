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
        >
          <div className="text-tert flex gap-4 m-3">
            <div className="w-32 h-28 bg-slate-500 rounded-2xl text-center ">
              {"M-" + (index + 1)}
            </div>
            <div>
              <div>{"M-" + (index + 1)}</div>
              <div>{module_name}</div>
            </div>
          </div>
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
      {"module list:"}
      <hr className="" />
      <div className="p-2">{module_div}</div>
    </div>
  );
}
