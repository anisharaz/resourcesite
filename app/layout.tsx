import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import ContextProvider from "./context/ContextProvider";

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
        <ContextProvider>
          <Navbar />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
