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
      <div className="" key={v4()}>
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
        <div className=" lg:h-screen bg-[#070041] text-white lg:px-4 flex flex-col gap-2">
          <div>
            <div className="text-4xl lg:text-5xl flex justify-center ">Modules List</div>
            <div className="py-2 flex flex-wrap lg:flex-col gap-2 mt-2">
              {module_nav_div}
            </div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl flex justify-center py-2">Additional</div>
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
