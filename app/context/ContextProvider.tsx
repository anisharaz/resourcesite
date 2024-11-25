import { EdgeStoreProvider } from "./EdgeStoreContext";
import { ThemeProvider } from "./Them-Provider";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <EdgeStoreProvider>{children}</EdgeStoreProvider>
    </ThemeProvider>
  );
}
