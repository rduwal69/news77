import React from 'react'
import { useState, useEffect } from "react";
import NewsItem from '../NewsItem';

const Politics = () => {
    const [politicsNews, setPoliticsNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/articles');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }


                const data = await response.json();

                const politicsData = data.articles.filter(article => article.category === 'politics');

                setPoliticsNews(politicsData.reverse());
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

    return (
        <>
            <div className="container my-5">

                <div className="row">
                    {politicsNews.map((article, index) => (
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

export default Politics
