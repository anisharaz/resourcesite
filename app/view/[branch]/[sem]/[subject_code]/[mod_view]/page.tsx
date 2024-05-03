import PdfViewer from "@/app/components/pdf_view/pdf_viewer";
import Module_nav from "./modle_nav";
import { v4 } from "uuid";
import { get_SubWithModules, get_module } from "@/app/actions/database";
async function Mod_view({
  params,
}: {
  params: {
    branch: string;
    sem: string;
    subject_code: string;
    mod_view: string;
  };
}) {
  const data = await get_module(parseInt(params.mod_view));
  const subject_data = await get_SubWithModules(params.subject_code);
  const modules = subject_data?.module;
  const module_nav_div = modules?.map((mod) => {
    return (
      <div key={v4()}>
        <Module_nav
          url={`/view/${params.branch}/${params.sem}/${params.subject_code}/${mod.id}`}
          name={"Module:" + mod.module_number}
        />
      </div>
    );
  });
  return (
    <>
      <div className="lg:flex">
        <div className="lg:h-screen bg-blue-100 lg:mx-1 lg:px-4 flex flex-col gap-2">
          <div>
            <div className="text-xl ">Modules List</div>
            <div className="flex lg:flex-col flex-wrap gap-2 mt-2">
              {module_nav_div}
            </div>
          </div>
          <div>
            <div className="text-xl ">Additional</div>
          </div>
        </div>
        <div className="flex-1 h-screen">
          <PdfViewer url={data?.module_link as string} />
        </div>
      </div>
    </>
  );
}

export default Mod_view;
