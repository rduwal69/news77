import React from 'react'
import { useState, useEffect } from "react";
import NewsItem from './NewsItem'
import { Link } from 'react-router-dom';


const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('../../article.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        
        const data = await response.json();

        setNews(data.articles.reverse());
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
      <div className="container my-5">

        <div className="card col-md-6 my-4">
          <h5 className="card-header">Add Latest News</h5>
          <div className="card-body">
            <Link to="/addnews" className="btn btn-primary">Add News</Link>
          </div>
        </div>

        <h4 className="text-center mb-3">News77 - Top Headlines</h4>
        <div className="row">
          {news.map((article, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-3" key={index}>
              <NewsItem
                id={article.id}
                category={article.category}
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
