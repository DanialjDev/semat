"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { MoonLoader } from "react-spinners";

interface ButtonProps {
  text: string;
  width?: string;
  bg?: string;
  color?: string;
  padding?: string;
  icon?: ReactNode;
  fontSize?: string;
  rounded?: string;
  dir?: "rtl" | "ltr";
  border?: string;
  loading?: boolean;
  onClick?: () => void;
}

const Button = ({
  text,
  bg,
  color,
  padding,
  width,
  icon,
  fontSize,
  rounded,
  dir = "rtl",
  border,
  loading,
  onClick,
}: ButtonProps) => {
  if (loading) {
    return (
      <div
        className={`flex ${
          width ? width : "w-full"
        } items-center justify-center ${
          padding ? padding : "px-[12px] py-[10px]"
        }`}
      >
        <MoonLoader size={18} className={`${color ? color : "text-white"}`} />
      </div>
    );
  }
  return (
    <button
      onClick={onClick}
      className={`flex items-center ${
        dir === "rtl" ? "flex-row" : "flex-row-reverse"
      } ${width ? width : "w-full"} ${bg ? bg : "bg-primary-base"} ${
        color ? color : "text-white"
      } ${fontSize ? fontSize : "text-[16px]"} ${
        padding ? padding : "px-[12px] py-[10px]"
      } ${rounded ? rounded : "rounded-[4px]"} ${border ? border : ""}`}
    >
      {icon && icon}
      <p className={`${dir === "rtl" ? "mr-3" : "ml-3"}`}>{text}</p>
    </button>
  );
};

export default Button;
