import { auth } from "@/auth";
import { getUserAllDetail } from "@/lib/Functions";
import Link from "next/link";
import { v4 } from "uuid";

async function AdminDocs() {
  const session = await auth();
  const UserDBData = await getUserAllDetail({
    userEmail: session?.user?.email as string,
  });
  const userPrograms = UserDBData?.program.map((program) => program);

  return (
    <div
      className=""
      style={{
        height: "calc(100vh - 64px)",
      }}
    >
      <div className="text-center text-textc dark:text-textc text-2xl">
        List of Programs
      </div>
      {userPrograms?.map((program) => {
        return (
          <>
            <Link
              href={`docs/${program.program_name}`}
              key={v4()}
              className="block max-w-sm p-6 rounded-lg shadow bg-lsec text-textc dark:text-textc dark:bg-dsec/80 border-white hover:border"
            >
              <h5 className="mb-2 text-xl font-bold tracking-tight">
                {program.program_name}
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
          </>
        );
      })}
    </div>
  );
}

export default AdminDocs;
