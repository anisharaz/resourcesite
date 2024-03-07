import BodyPdf from "../components/Pdf/BodyPdf";
import Module_selection from "./module_selection";

export default function Modules_view({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <div>
      {searchParams.current_module_path}
      <Module_selection
        current_module_path={searchParams.current_module_path}
        current_module_name={searchParams.current_module_name}
        othermodule_path={JSON.parse(searchParams.other_modules_path)}
        othermodule_name={JSON.parse(searchParams.other_modules_name)}
      />
      <BodyPdf current_module_path={searchParams.current_module_path} />
    </div>
  );
}
