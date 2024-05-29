import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { ThemeProvider } from "./context/Them-Provider";
const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "400"],
});
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
    <html lang="en">
      <body className={RobotoFont.className}>
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
