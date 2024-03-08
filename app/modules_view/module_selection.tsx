"use client";

import Link from "next/link";
import { useState } from "react";

export default function Module_selection({
  current_module_name,
  current_module_path,
  othermodule_path,
  othermodule_name,
}: {
  current_module_name: string;
  current_module_path: string;
  othermodule_path: { [key: string]: string };
  othermodule_name: { [key: string]: string };
}) {
  const [modulePathName, setmodulePathName] = useState<string[]>([ // Added default value
    current_module_path,
    current_module_name
  ]);

  const module_name = Object.values(othermodule_name);

  const option = Object.values(othermodule_path).map((module_path, index) => {
    return (
      <option value={module_path + "," + module_name[index]} key={index}>
        {othermodule_name[index]}
      </option>
    );
  });

  return (
    <>
      <div className="bg-pri pb-2">
        <form className="max-w-sm mx-auto pt-4">
          <select
            defaultValue={current_module_path + "," + current_module_name}
            id="countries"
            className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              var path = e.target.value.split(",")[0];
              var name = e.target.value.split(",")[1];
              setmodulePathName(() => [path, name]);
            }}
          >
            {option}
          </select>
        </form>
        <div className="flex justify-center items-center">
          <Link
            href={{
              pathname: "/modules_view",
              query: {
                current_module_name: modulePathName[1],
                current_module_path: modulePathName[0] as string,
                other_modules_path: JSON.stringify(othermodule_path),
                other_modules_name: JSON.stringify(othermodule_name),
              },
            }}
          >
            <div className="mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Load Selected Module
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
