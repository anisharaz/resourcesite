// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PdfViewer from "@/components/PdfViewer";
import Sidebar from "./Sidebar";
import { v4 } from "uuid";
import { get_SubWithModules, get_module } from "@/app/actions/database";
async function Module_view({
  params,
}: {
  params: Promise<{
    branch: string;
    sem: string;
    subject_code: string;
    mod_view: string;
  }>;
}) {
  const param = await params;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = await get_module(parseInt(param.mod_view));
  // console.log(data?.module_url);

  const subject_data = await get_SubWithModules(param.subject_code);
  const modules = subject_data?.module;
  const Sidebar_div = modules?.map((mod) => {
    return (
      <div className="px-2" key={v4()}>
        <Sidebar
          url={`/view/${param.branch}/${param.sem}/${param.subject_code}/${mod.id}`}
          name={"Module:" + mod.module_no}
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
              {Sidebar_div}
            </div>
          </div>
          <div className="py-1">
            <div className="text-xl lg:text-4xl underline underline-offset-4 lg:underline-offset-8">
              Additional
            </div>
          </div>
        </div>
        <div className="flex-1 h-screen">
          <PdfViewer url={data?.module_url[0].url as string} />
        </div>
      </div>
    </>
  );
}

export default Module_view;
