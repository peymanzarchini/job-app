import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job-app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid min-h-screen grid-rows-[auto_1fr_auto]`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
        <div className="border-t-2 border-gray-300">
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
