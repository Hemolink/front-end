import React from "react";
import NewsItem from "./NewsItem";

interface NewsProps {
  content: Array<{
    icon: JSX.Element;
    title: string;
  }>;
}

export const News = ({ content }: NewsProps) => {
  return (
    <section>
      <h2>Ultimas Noticias</h2>
      {content.map((item) => (
        <NewsItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          onClick={() => console.log(`item clicked ${item.title}`)}
        />
      ))}
    </section>
  );
};
