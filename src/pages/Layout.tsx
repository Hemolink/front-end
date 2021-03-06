import React from "react";

interface LayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[1200px] min-h-[calc(100vh-92px)]">{children}</div>
    </div>
  );
};
