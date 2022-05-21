import React from "react";

export interface ButtonProps {
  children: string;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="testestes" onClick={() => console.log("RonaldViadao")}>
      {children}
    </button>
  );
};
