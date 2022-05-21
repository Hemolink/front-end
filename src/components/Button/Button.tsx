import React from "react";

export interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-primary-900 hover:bg-primary-500 text-light font-bold px-3 py-1 rounded ">
      {children}
    </button>
  );
};
