import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
}

export const Input = ({ label, name, ...props }: InputProps) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-neutral-900"
      >{`${label}`}</label>
      <input
        {...props}
        name={name}
        className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5"
      />
    </>
  );
};
