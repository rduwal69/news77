import React, { useEffect, useState } from 'react';

const NewsDetail = ({ title, description, imageUrl }) => {
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await fetch("/article.json");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const article = data.articles;
        console.log(article);

        if (article) {
          setNewsDetail(article);
        } else {
          setError('Article not found');
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [title]);

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
      <NewsDetail/>
    </div>
  );
};

export default NewsDetail;
