import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  required?: boolean;
  error?: string;
}

export const Input = ({
  label,
  name,
  required,
  error,
  ...props
}: InputProps) => {
  return (
    <div className="">
      <label htmlFor={name}>{`${label}${required ? "*" : ""}`}</label>
      <input {...props} name={name} />
      {error && <span>{error}</span>}
    </div>
  );
};
