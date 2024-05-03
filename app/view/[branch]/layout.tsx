import Navigator from "@/app/components/Navigator";
function Branch_layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap bg-pri min-h-8 py-2 px-1">
        <Navigator />
      </div>
      {children}
    </>
  );
}

export default Branch_layout;
