import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumia Living Furniture",
  description: "lumia living furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Navbar />
          <div className="w-full min-h-[90vh]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
