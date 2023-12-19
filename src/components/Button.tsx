import React, { ReactNode } from "react";

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
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center ${
        dir === "rtl" ? "flex-row" : "flex-row-reverse"
      } ${width ? width : "w-full"} ${bg ? bg : "bg-primary"} ${
        color ? color : "text-white"
      } ${fontSize ? fontSize : "text-[16px]"} ${
        padding ? padding : "px-[12px] py-[10px]"
      } ${rounded ? rounded : "rounded-[4px]"}`}
    >
      <p className={`${dir === "rtl" ? "mr-3" : "ml-3"}`}>{text}</p>
      {icon && icon}
    </button>
  );
};

export default Button;
