import PDF from "./PDF";

export default function BodyPdf({
  current_module_path,
}: {
  current_module_path: string;
}) {
  return (
    <div>
      {/* pdf render statically  */}
      <PDF module_pdf_path={current_module_path} />
    </div>
  );
}
