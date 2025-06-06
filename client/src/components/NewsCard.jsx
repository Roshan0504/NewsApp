import React from "react";

function NewsCard({ article }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="news"
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="font-bold text-lg">{article.title}</h2>
        <p className="text-sm text-gray-600 mt-2">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 mt-4 block"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
