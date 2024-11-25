import SideBar from "@/components/SideBar";

export default function Admin_layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className="flex"
        style={{
          height: "calc(100vh - 64px)",
        }}
      >
        <SideBar />

        {children}
      </div>
    </>
  );
}
