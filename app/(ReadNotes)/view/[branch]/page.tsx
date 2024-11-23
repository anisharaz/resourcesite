import { get_branch } from "@/app/actions/database";
import Link from "next/link";
import { v4 } from "uuid";

async function Semesters({ params }: { params: Promise<{ branch: string }> }) {
  const param = await params;
  const data = await get_branch(param.branch);
  const sems = data?.available_sems as Array<number>;
  const sem_div = sems.map((sem) => {
    return (
      <Link
        href={`/view/${param.branch}/${sem}`}
        key={v4()}
        className="block max-w-sm p-6 rounded-lg shadow bg-lsec text-textc dark:text-textc dark:bg-dsec/80 border-white hover:border"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          {"SEMESTER " + sem}
        </h5>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#00C25A"
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
    <>
      <div
        className="text-textc bg-lpri dark:bg-dpri"
        style={{
          minHeight: "calc(100vh - 52px)",
        }}
      >
        <div className="text-center text-2xl py-3 ">Branch :{param.branch}</div>
        <div className="grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 gap-2 p-2">
          {sem_div}
        </div>
      </div>
    </>
  );
}

export default Semesters;
