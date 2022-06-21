import React from "react";
import NewsItem from "./NewsItem";

interface NewsProps {
  content: Array<{
    title: string;
    shortDescription: string;
    url: string;
  }>;
}

export const News = ({ content }: NewsProps) => {
  return (
    <section>
      <h2 className="text-2xl my-2 mb-8 text-center text-primary-900">
        Últimas Notícias
      </h2>
      <div className="flex gap-4 flex-col">
        {content.map((item) => (
          <NewsItem
            key={item.title}
            title={item.title}
            url={item.url}
            shortDescription={item.shortDescription}
          />
        ))}
      </div>
    </section>
  );
};
