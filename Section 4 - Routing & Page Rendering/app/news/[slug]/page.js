import React from "react";
import { DUMMY_NEWS } from "@/consts/dummy-data";
const NewsPostPage = async ({ params }) => {
  const { slug: newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  if (!newsItem) {
    return <p>News item not found!</p>;
  }
  return (
    <div className="mt-2 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <img
        className="w-full h-64 object-cover rounded-t-lg"
        src={`/assets/images/${newsItem.image}`}
        alt={newsItem.title}
      />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-gray-950 mb-4">
          {newsItem.title}
        </h1>
        <p className="text-gray-900 mb-6">{newsItem.content}</p>
        <p className="text-sm text-gray-500">ID: {newsItem.id}</p>
      </div>
    </div>
  );
};

export default NewsPostPage;
