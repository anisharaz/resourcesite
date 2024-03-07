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
  const semData = branch_data.map((item) => {
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
          className="w-44 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {sub}
        </Link>
      );
    });
    return (
      <div className="pt-4" key={item.id}>
        <p className="text-2xl pl-3">{"Sem - " + item.sem}</p>
        <hr />
        <div className="subject-list m-4">{subject_div}</div>
      </div>
    );
  });

  return <div className="branch_view  bg-pri text-tert">{semData}</div>;
}
