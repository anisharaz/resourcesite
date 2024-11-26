// import BreadcrumNav from "@/components/ui/BreadcrumNav";
function Branch_layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <div className="flex justify-center items-center flex-wrap bg-lback dark:bg-dback min-h-8 py-2 px-1 border-t-2 border-black dark:border-white">
        <BreadcrumNav />
      </div> */}
      {children}
    </>
  );
}

export default Branch_layout;
