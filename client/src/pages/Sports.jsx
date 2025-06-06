import React, { useEffect, useState } from "react";
import axios from "axios";

const Sports = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )
      .then((res) => setArticles(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Sports News</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <div
            key={i}
            className="border p-4 rounded shadow hover:shadow-md transition"
          >
            <img
              src={article.urlToImage}
              alt=""
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h2 className="font-semibold text-xl mb-2">{article.title}</h2>
            <p className="text-gray-600 text-sm">{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline text-sm mt-2 block"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sports;
