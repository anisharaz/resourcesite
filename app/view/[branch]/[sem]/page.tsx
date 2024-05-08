import { get_sem } from "@/app/actions/database";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { v4 } from "uuid";

async function Subjects({
  params,
}: {
  params: { branch: string; sem: string };
}) {
  const data = await get_sem(params.branch, parseInt(params.sem));

  const subjects_div = data.map((subject) => {
    const subjectObj = [{
      title: `${subject.subject_name} (${subject.subject_short_name})`,
      description: subject.subject_code,
      link: `/view/${params.branch}/${params.sem}/${subject.subject_code}`,
    }];

    return (
      <div key={v4()} className="max-w-5xl mx-auto px-8">
        <HoverEffect items={subjectObj} />
      </div>
    );
  });

  return (
    <>
      <div
        className="bg-pri p-2"
        style={{
          minHeight: "calc(100vh - 52px)",
        }}
      >
        <div className="text-center text-white text-2xl sm:text-3xl pt-5">
          Sem : {params.sem}
        </div>
        <br />
        <div className="grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2 gap-2 justify-items-center">
          {subjects_div}
        </div>
      </div>
    </>
  );
}

export default Subjects;
