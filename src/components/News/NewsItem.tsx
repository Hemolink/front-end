import React from "react";

interface NewsitemProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: JSX.Element;
  title: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NewsItem = ({ icon, title, onClick, ...others }: NewsitemProps) => {
  return (
    <div
      // className="flex rounded-md gap-2 text-lg p-4 my-4 hover:opacity-80 cursor-pointer"
      className="p-6 bg-light rounded-lg border border-neutral-200 shadow-md cursor-pointer hover:opacity-80"
      onClick={onClick}
      {...others}
    >
      {/* <div className="h-6 w-6">{icon}</div> */}
      <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </div>
  );
};

export default NewsItem;
