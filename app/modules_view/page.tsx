import BodyPdf from "../components/Pdf/BodyPdf";

export default function modules_view({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <div>
      <BodyPdf />
    </div>
    // <div>
    //   {searchParams.module_path +
    //     " " +
    //     JSON.parse(searchParams.other_modules)[2]}
    // </div>
  );
}
