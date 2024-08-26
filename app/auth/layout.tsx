import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Slyde AI",
  description: "Generate presentations with the help of AI",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
