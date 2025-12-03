import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: "Backend Dev - Harsh",
  description: "Passionate backend developer and a CS genius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} text-[14px] font-medium flex w-screen scrollbar-hide`}>
        <Navbar />
        <section className="flex-[10] h-screen overflow-y-auto">
          {children}
        </section>
      </body>
    </html>
  );
}
