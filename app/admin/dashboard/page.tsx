import { signOut } from "@/auth";

export default function Admin_dashboard() {
  return (
    <div className="flex justify-center gap-5">
      <div>Admin Dashboard</div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className="h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-400 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </form>
    </div>
  );
}
