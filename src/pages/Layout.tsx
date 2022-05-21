import React from "react";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-[1200px] min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
