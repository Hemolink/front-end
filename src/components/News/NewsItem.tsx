import React from "react";

interface NewsitemProps extends React.ComponentPropsWithoutRef<"div"> {
  url: string;
  title: string;
}

const NewsItem = ({ url, title, ...others }: NewsitemProps) => {
  const handleClick = () => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div
      className="p-6 bg-light rounded-lg border border-neutral-200 shadow-md cursor-pointer hover:opacity-80"
      onClick={handleClick}
      {...others}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  );
};

export default NewsItem;
