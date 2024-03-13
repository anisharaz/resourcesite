import Link from "next/link";
import "./branch_view.scss";
import { get_branch } from "@/app/actions/database";
import { JsonArray, JsonObject } from "@prisma/client/runtime/library";
export default async function Branch_view({
  params,
}: {
  params: { branch_code: string };
}) {
  const branch_data = await get_branch(params.branch_code);
  if (branch_data.length == 0) {
    return (
      <div className="branch_view items-center bg-pri text-tert">
        <h2>No subject Found For given Branch</h2>
      </div>
    );
  }

  const semData = branch_data.map((item: any) => {
    var subjects;
    var subject_codes: (
      | string
      | number
      | boolean
      | JsonObject
      | JsonArray
      | null
      | undefined
    )[];
    if (typeof item.subjectcodes === "object" && item.subjectcodes !== null) {
      subjects = Object.keys(item.subjectcodes);
      subject_codes = Object.values(item.subjectcodes);
    }
    const subject_div = subjects?.map((sub, index) => {
      return (
        <Link
          href={{
            pathname: "/subject_view",
            query: {
              subject_name: sub,
              subject_code: subject_codes[index] as string,
            },
          }}
          key={index}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          {/* {sub} */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {sub}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-1">
            Name: Data communication & networking
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
    });
    return (
      <div className="pt-4" key={item.id}>
        <p className="text-2xl pl-3">{"Sem - " + item.sem}</p>
        <div className="border-t-2 border-tert mt-2"></div>
        <div className="subject-list m-4">{subject_div}</div>
      </div>
    );
  });

  return <div className="branch_view  bg-pri text-tert">{semData}</div>;
}
