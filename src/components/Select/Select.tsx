import React, { forwardRef } from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  errorMessage?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, errorMessage, options, ...others }, ref) => {
    return (
      <div>
        <label
          htmlFor={name}
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
        <select
          ref={ref}
          name={name}
          id={name}
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5"
          {...others}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errorMessage && <div className="text-sm ">{errorMessage}</div>}
      </div>
    );
  }
);
