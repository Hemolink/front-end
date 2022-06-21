import React, { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
  errorMessage?: string;
  register?: any;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, errorMessage, register, ...props }, ref) => {
    return (
      <div>
        <label
          htmlFor={name}
          className="block mb-2 text-sm  text-neutral-900 font-display"
        >{`${label}`}</label>
        <input
          {...props}
          ref={ref}
          name={name}
          className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5"
          {...register?.(name)}
        />
        {errorMessage && <div className="text-sm ">{errorMessage}</div>}
      </div>
    );
  }
);
