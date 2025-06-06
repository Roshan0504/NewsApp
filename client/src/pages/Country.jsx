import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = () => {
  const [country, setCountry] = useState("us"); // Default: United States
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const countries = [
    { name: "United States", code: "us" },
    { name: "India", code: "in" },
    { name: "United Kingdom", code: "gb" },
    { name: "Australia", code: "au" },
    { name: "Canada", code: "ca" },
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "Japan", code: "jp" },
    { name: "China", code: "cn" },
    { name: "Brazil", code: "br" },
  ];

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        setArticles(response.data.articles);
      } catch (err) {
        setError("Failed to fetch news.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [country]);

  return (
    <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Country-Specific News</h1> 
         {" "}
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="mb-6 p-2 border rounded"
      >
               {" "}
        {countries.map((c) => (
          <option key={c.code} value={c.code}>
                        {c.name}         {" "}
          </option>
        ))}
             {" "}
      </select>
           {" "}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                   {" "}
          {articles.map((article, i) => (
            <div key={i} className="border p-4 rounded shadow">
                           {" "}
              <img
                src={
                  article.urlToImage ||
                  "https://via.placeholder.com/400x200?text=No+Image"
                }
                alt="News"
                className="h-40 w-full object-cover mb-4 rounded"
              />
                           {" "}
              <h2 className="font-semibold text-xl mb-2">{article.title}</h2>   
                       {" "}
              <p className="text-gray-600 text-sm">{article.description}</p>  
                       {" "}
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline text-sm mt-2 block"
              >
                                Read more              {" "}
              </a>
                         {" "}
            </div>
          ))}
                 {" "}
        </div>
      )}
         {" "}
    </div>
  );
};

export default Country;
