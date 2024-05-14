import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "400"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://notes.aaraz.me"),
  title: "Learning Resources | Modules Pdf",
  description: "Jain University Learning Resources Modules Pdf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={RobotoFont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
