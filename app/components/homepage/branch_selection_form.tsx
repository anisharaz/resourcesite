"use client";

import Link from "next/link";
import { useState } from "react";

export default function Branch_selection_form() {
  const [branch, setBranch] = useState("cse");
  return (
    <>
      <div className="pb-4 ml-8 mr-8">
        <form className="max-w-sm mx-auto pt-4">
          <select
            value={branch}
            id="countries"
            className="border text-white text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
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
            <div className="mt-6 text-gray-900 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 bg-blue-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Get Started
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
