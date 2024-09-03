import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Challenge",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />

        {children}
      </body>
    </html>
  );
}
