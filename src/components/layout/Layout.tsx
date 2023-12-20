"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "../main/Footer";
import Navbar from "../main/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full flex flex-col xl:px-10 px-8 mx-auto max-w-[1550px]">
        <Navbar />
        {pathname !== "/" && <div>{/* Breade Crumb */}</div>}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
