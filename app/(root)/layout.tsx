import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar";
const lexend = Lexend({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Slyde AI",
  description: "Generate presentations with the help of AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Navbar />
        <main>{children}</main>        
      </body>
    </html>
  );
}
