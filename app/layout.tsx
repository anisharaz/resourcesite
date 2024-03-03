import type { Metadata } from "next";
import { Inter, Space_Mono, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "400"],
});
export const metadata: Metadata = {
  title: "Learning Resources",
  description: "Jain University Learning Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={RobotoFont.className}>{children}</body>
    </html>
  );
}
