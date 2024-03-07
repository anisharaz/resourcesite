export default function Modules_view_layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
    </>
  );
}
