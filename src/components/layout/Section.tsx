import React, { ReactNode } from "react";

const Section = ({
  children,
  title,
  centerTitle = true,
  hasExtraForTitle,
}: {
  children: ReactNode;
  title: string | ReactNode;
  centerTitle?: boolean;
  hasExtraForTitle?: boolean;
}) => {
  return (
    <div className="w-full flex flex-col">
      {hasExtraForTitle ? (
        <>{title}</>
      ) : (
        <div
          className={`flex ${
            centerTitle ? "justify-center" : "justify-start"
          } items-center relative`}
        >
          <span
            className={`bg-white z-20 px-3 ${
              !centerTitle ? "mr-10" : ""
            } text-primary-400 font-bold`}
          >
            {title}
          </span>
          <div className="w-full absolute border border-dashed border-gray-cb bottom-[50%] z-10" />
        </div>
      )}
      {children}
    </div>
  );
};

export default Section;
