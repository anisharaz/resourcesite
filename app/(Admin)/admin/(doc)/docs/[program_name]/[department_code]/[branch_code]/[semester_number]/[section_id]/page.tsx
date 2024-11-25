// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// TODO: fix the es lint to clear the type error in params
async function SubjectPage({ params }) {
  const { section_id } = await params;

  return <div>{section_id}</div>;
}

export default SubjectPage;
