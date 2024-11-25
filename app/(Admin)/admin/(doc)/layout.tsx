// import DocSideBar from "./DocSidebar";

export default function DOC_Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <div
        className="flex"
        style={{
          height: "calc(100vh - 64px)",
        }}
      >
        <DocSideBar />
      </div> */}
      {children}
    </>
  );
}
