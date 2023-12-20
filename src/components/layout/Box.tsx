import React, { ReactNode } from "react";

const Box = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`border border-gray-100 rounded-[5px] !overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
