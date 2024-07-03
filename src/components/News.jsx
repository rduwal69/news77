import React from 'react'
import { useState, useEffect } from "react";
import NewsItem from './NewsItem'


const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('./article.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        setNews(data.articles);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const recentNews = news.slice(0,6);
  return (
    <>
      <div className="container my-3">
        <h4 className="text-center mb-3">News77 - Top Headlines</h4>
        <div className="row">
          {news.map((article, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
              <NewsItem
                title={article.title || "No Title"}
                description={article.description || "No Description"}
                imageUrl={article.urlToImage || "https://via.placeholder.com/150"}
              />
            </div>
          ))}
        </div>
      </div>
    </>

  )
}

export default News
