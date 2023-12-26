"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Footer from "../main/Footer";
import Navbar from "../main/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  return (
    <div
      className={`w-full h-full ${
        pathname === "/login" ? "bg-login-bg" : ""
      } bg-no-repeat bg-center bg-cover ${
        pathname === "/login" ? "overflow-hidden" : ""
      }`}
    >
      <div
        className={`w-full flex flex-col xl:px-10 px-8 mx-auto max-w-[1550px] ${
          pathname === "/login" ? "overflow-hidden" : ""
        }`}
      >
        <Navbar />
        {pathname !== "/" && <div>{/* Breade Crumb */}</div>}
        {children}
      </div>
      {pathname !== "/login" && <Footer />}
    </div>
  );
};

export default Layout;
