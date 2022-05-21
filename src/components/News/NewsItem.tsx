import React from "react";

interface NewsitemProps {
  icon: JSX.Element;
  title: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const NewsItem = ({ icon, title, onClick }: NewsitemProps) => {
  return (
    <div onClick={onClick}>
      <div className="h-6 w-6">{icon}</div>
      <span>{title}</span>
    </div>
  );
};

export default NewsItem;
