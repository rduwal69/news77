import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const NewsDetail = ({ title, description, imageUrl }) => {
    const [newsDetail, setNewsDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchNewsDetail = async () => {
            try {
                const response = await fetch(`/article.json`);

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();
                console.log(data);

                const article = data.articles.find(article => article.id === parseInt(id));

                if (article) {
                    setNewsDetail(article);
                } else {
                    throw new Error('Article not found');
                }

                setLoading(false);
            } catch (err) {
                console.error('Fetch error:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchNewsDetail();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!newsDetail) {
        return <div>No news detail found</div>;
    }

    return (
        <div>
            <div className="container">
                <div className="col-md-6 my-5">
                    <div className="card p-3">
                        <h1 className="card-title">{newsDetail.title}</h1>
                        <img src={newsDetail.urlToImage} className="card-img-top" alt="News Detail" />
                        <div className="card-body">
                            <p className="card-text">{newsDetail.description}</p>
                            <Link to="/" className="btn btn-dark">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
