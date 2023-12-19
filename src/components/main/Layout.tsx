"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Navbar from "../Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full flex flex-col 2xl:p-0 px-6 mx-auto max-w-[1600px]">
        <Navbar />
        {pathname !== "/" && <div>{/* Breade Crumb */}</div>}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
