"use client";

import Link from "next/link";
import { useState } from "react";

function branch_selection_form() {
  const [branch, setBranch] = useState("");
  return (
    <>
      <form className="max-w-sm mx-auto pt-4">
        <select
          value={branch}
          id="countries"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value="">Select Branch </option>
          <option value="cse">CSE</option>
        </select>
      </form>
      <div className="flex justify-center items-center">
        <Link
          href={{
            pathname: "/branch_view",
            query: { branch_code: branch },
          }}
        >
          <div className="mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            Get Branch Notes
          </div>
        </Link>
      </div>
    </>
  );
}

export default branch_selection_form;
