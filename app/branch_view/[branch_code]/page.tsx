import "./branch_view.scss";
import { get_branch } from "@/app/actions/database";
export default async function branch_view({
  params,
}: {
  params: { branch_code: string };
}) {
  const branch_data = await get_branch(params.branch_code);
  console.log(branch_data);
  if (branch_data.length == 0) {
    return (
      <div className="branch_view items-center bg-pri text-tert">
        <h2>No subject Found For given Branch</h2>
      </div>
    );
  }
  const semData = branch_data.map((item) => {
    var subjects;
    var subject_codes;
    if (typeof item.subjectcodes === "object" && item.subjectcodes !== null) {
      subjects = Object.keys(item.subjectcodes);
      subject_codes = Object.values(item.subjectcodes);
    }
    const subject_div = subjects?.map((sub) => {
      return (
        <div className="">
          <p>{sub}</p>
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
