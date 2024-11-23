import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/Them-Provider";
import Navbar from "@/components/ui/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://notes.aaraz.me"),
  title: "Download Free College Reading Resources",
  description: "You can start reading without leaving your browser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
