import React from "react";
import clsx from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | JSX.Element | JSX.Element[];
  fullWidth?: boolean;
}

export const Button = ({
  children,
  fullWidth = false,
  className,
  ...others
}: ButtonProps) => {
  const classnames = clsx(
    fullWidth && "w-full",
    "text-light bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",
    className
  );

  return (
    <button className={classnames} type="button" {...others}>
      {children}
    </button>
  );
};
