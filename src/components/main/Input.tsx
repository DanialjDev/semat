import React, { ReactNode } from "react";

const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  // value,
  // setValue,
  isMultipleLine,
  rows = 3,
  icon,
}: {
  label?: string;
  placeholder: string;
  type?: string;
  name: string;
  // value: string;
  // setValue: React.Dispatch<React.SetStateAction<string>>;
  isMultipleLine?: boolean;
  rows?: number;
  icon?: ReactNode;
}) => {
  return (
    <div className="flex w-full relative flex-col items-start">
      {label && (
        <label htmlFor={name} className="my-1 text-[14px]">
          {label}
        </label>
      )}
      {isMultipleLine ? (
        <textarea
          className="border w-full resize-none border-gray-100 rounded-[4px] px-[12px] py-[10px] shadow-inputShadow outline-none"
          placeholder={placeholder}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          name={name}
          id={name}
          rows={rows}
        ></textarea>
      ) : (
        <div className="relative w-full">
          <input
            className="border w-full z-10 border-gray-100 rounded-[4px] px-[12px] py-[10px] shadow-inputShadow outline-none"
            placeholder={placeholder}
            // value={value}
            // onChange={(e) => setValue(e.target.value)}
            type={type}
            name={name}
            id={name}
          />
          {icon && <span className="absolute left-3 top-3 z-20">{icon}</span>}
        </div>
      )}
    </div>
  );
};

export default Input;
