import prisma from "@/lib/db";

async function ModulesPage({
  params,
}: {
  params: Promise<{ subject_code: string }>;
}) {
  const param = await params;
  const subject_data = await prisma.subjects.findUnique({
    where: {
      id: parseInt(param.subject_code),
    },
    include: {
      module: true,
    },
  });
  return (
    <div>
      <div className="text-center text-textc dark:text-textc text-2xl">
        List of Modules
      </div>
      {subject_data?.module.map((module) => {
        return (
          <div
            key={module.id}
            className="border p-4 rounded-md m-2 bg-neutral-600 border-gray-400"
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight">
              {module.module_name}
            </h5>
            <p>{module.module_description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ModulesPage;
