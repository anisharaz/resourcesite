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
      <div className="px-2" key={v4()}>
        <Module_nav
          url={`/view/${params.branch}/${params.sem}/${params.subject_code}/${mod.id}`}
          name={"Module:" + mod.module_number}
        />
      </div>
    );
  });
  return (
    <>
      <div className="lg:flex font-serif">
        <div className="lg:p-2 lg:h-screen bg-white text-black dark:bg-black dark:text-white lg:px-4 flex flex-col">
          <div>
            <div className="text-xl lg:text-4xl underline underline-offset-4 lg:underline-offset-8 lg:py-4 ">
              Modules List
            </div>
            <div className="flex flex-wrap lg:flex-col lg:gap-2 lg:mt-2 mt-1">
              {module_nav_div}
            </div>
          </div>
          <div className="py-1">
            <div className="text-xl lg:text-4xl underline underline-offset-4 lg:underline-offset-8">
              Additional
            </div>
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
