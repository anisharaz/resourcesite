import Link from "next/link";
import "./branch_view.scss";
import { get_branch } from "@/app/actions/database";
import { JsonArray, JsonObject } from "@prisma/client/runtime/library";
export default async function branch_view({
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
        <div className="" key={sub}>
          <Link
            href={{
              pathname: "/subject_view",
              query: {
                subject_name: sub,
                subject_code: subject_codes[index] as string,
              },
            }}
          >
            {sub}
          </Link>
        </div>
      );
    });
    return (
      <div className="pt-4" key={item.id}>
        <p className="text-2xl">{"Sem - " + item.sem}</p>
        <hr />
        <div className="subject-list">{subject_div}</div>
      </div>
    );
  });

  return <div className="branch_view  bg-pri text-tert">{semData}</div>;
}
