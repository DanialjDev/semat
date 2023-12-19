import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Layout from "@/components/main/Layout";
// import font from '../../public/assets/fonts/woff/IRANSansX-Meduim.woff'

const IranYekan = localFont({
  src: "../../public/assets/fonts/woff/IRANSansX-Medium.woff",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body dir="rtl" className={`h-full ${IranYekan.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
