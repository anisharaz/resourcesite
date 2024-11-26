// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PdfViewer from "@/components/PdfViewer";
import Sidebar from "./Sidebar";
import { v4 } from "uuid";
import { get_SubWithModules, get_module } from "@/app/actions/database";
import { ChatUI } from "@/components/chat_ui";

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
  const moduleParam = param.mod_view;
  const [module, subModule] = moduleParam.split("_");
  console.log(module, subModule);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const data = await get_module(parseInt(param.mod_view));
  // console.log(data);

  const subject_data = await get_SubWithModules(param.subject_code);
  const modules = subject_data?.module;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const Sidebar_div = modules[0].module_url?.map((mod) => {
    return (
      <div className="px-2" key={v4()}>
        <Sidebar
          url={`/view/${param.branch}/${param.sem}/${param.subject_code}/${module}_${subModule}`}
          name={"Module:" + mod.doc_no}
        />
      </div>
    );
  });

  return (
    <>
      <div className="lg:flex font-serif">
        <div className="lg:p-2 bg-white text-black dark:bg-black dark:text-white lg:px-4 flex flex-col">
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
        <div className="flex-1 flex">
          <PdfViewer
            url={`${process.env.HOST_NAME}/resourcesite/modules/${param.subject_code}/CSE_GEN_E/${param.subject_code}_${module}.pdf`}
          />
          <ChatUI />
        </div>
      </div>
    </>
  );
}

export default Module_view;
