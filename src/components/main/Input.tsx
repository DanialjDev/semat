import React from "react";

const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  // value,
  // setValue,
  isMultipleLine,
  rows = 3,
}: {
  label?: string;
  placeholder: string;
  type?: string;
  name: string;
  // value: string;
  // setValue: React.Dispatch<React.SetStateAction<string>>;
  isMultipleLine?: boolean;
  rows?: number;
}) => {
  return (
    <div className="flex w-full flex-col items-start">
      {label && (
        <label htmlFor={name} className="my-1">
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
        <input
          className="border w-full border-gray-100 rounded-[4px] px-[12px] py-[10px] shadow-inputShadow outline-none"
          placeholder={placeholder}
          // value={value}
          // onChange={(e) => setValue(e.target.value)}
          type={type}
          name={name}
          id={name}
        />
      )}
    </div>
  );
};

export default Input;
