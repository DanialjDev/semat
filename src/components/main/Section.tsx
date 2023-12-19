import React, { ReactNode } from "react";

const Section = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string | ReactNode;
}) => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-center relative">
        <span className="bg-white z-20 px-3 text-primary-400 font-bold">
          {title}
        </span>
        <div className="w-full absolute border border-dashed border-gray-cb bottom-[50%] z-10" />
      </div>
      {children}
    </div>
  );
};

export default Section;
