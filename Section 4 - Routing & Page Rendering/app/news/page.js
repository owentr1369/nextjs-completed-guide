import React from "react";
import { DUMMY_NEWS } from "@/conts/dummy-data";
import Link from "next/link";

const NEwsPage = () => {
  return (
    <div>
      <ul className="list-none p-0 flex flex-wrap gap-5">
        {DUMMY_NEWS.map((news) => (
          <li
            key={news.id}
            className="flex-1 min-w-[calc(33.333%-20px)] w-[calc(33.333%-20px)] box-border border border-gray-300 p-2 rounded"
          >
            <Link href={`/news/${news.id}`}>
              <img
                src={`/assets/images/${news.image}`}
                alt={news.title}
                className="w-full h-auto rounded"
              />
              <h1 className="text-xl my-2">{news.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NEwsPage;
