import { auth } from "@/auth";
import prisma from "@/lib/db";
import Link from "next/link";
import { v4 } from "uuid";

async function SectionsPage({
  params,
}: {
  params: Promise<{ semester_number: string }>;
}) {
  const { semester_number } = await params;
  const session = await auth();
  const UserDBData = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
    include: {
      program: true,
      department: true,
      branch: true,
      semesters: true,
      section: true,
    },
  });
  const semesters = await prisma.semesters.findUnique({
    where: {
      sem_number: parseInt(semester_number),
    },
  });
  const section = UserDBData?.section.filter(
    (section) => section.semestersId === semesters?.id,
  );
  return (
    <div>
      <div className="text-center text-textc dark:text-textc text-2xl">
        List of Sections
      </div>
      {section?.map((section) => {
        return (
          <Link
            href={`${semester_number}/${section.id}`}
            key={v4()}
            className="block max-w-sm p-6 rounded-lg shadow bg-lsec text-textc dark:text-textc dark:bg-dsec/80 border-white hover:border"
          >
            <h5 className="mb-2 text-xl font-bold tracking-tight">
              {section.section_name}
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#00C25A"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        );
      })}
    </div>
  );
}

export default SectionsPage;
