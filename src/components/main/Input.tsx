import React from "react";

const Input = ({
  label,
  placeholder,
  value,
  type,
  name,
  setValue,
}: {
  label?: string;
  placeholder: string;
  value: string;
  type: string;
  name: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex flex-col items-start">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        className="border border-gray-100 rounded-[4px] px-[12px] py-[10px] shadow-inputShadow outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        name={name}
        id={name}
      />
    </div>
  );
};

export default Input;
