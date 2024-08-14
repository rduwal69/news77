import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const NewsDetail = () => {
    const [newsDetail, setNewsDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const goBack = () => {
        navigate(from);
    };

    useEffect(() => {
        const fetchNewsDetail = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/articles/${id}`);

                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }

                const data = await response.json();

                if (data) {
                    setNewsDetail(data.articles);
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

    const handelDelete = async () => {
        if (confirm("Are you sure?")) {
            const response = await fetch(`http://127.0.0.1:8000/api/articles/${id}/delete`, {
                method: 'DELETE',
            });
            toast.success("Delete Successfully");
            return navigate('/');
        }

    }
    return (
        <div>
            <div className="container d-flex gap-3 ">
                <div className="col-md-6 my-5">
                    <div className="card p-3">
                        <h1 className="card-title">{newsDetail.title}</h1>
                        <img src={newsDetail.urlToImage} className="card-img-top" alt="News Detail" />
                        <div className="card-body">
                            <p className="card-text">{newsDetail.description}</p>
                            <button onClick={goBack} className="btn btn-dark">Back</button>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 my-5 ">
                    <div className="card p-3 d-flex">
                        <h6 className="card-title text-center">Author Name: {newsDetail.author}</h6>
                        <div className="card-body text-center">
                            <p className="card-text"><span>Source: </span>{newsDetail.url}</p>
                            <button onClick={handelDelete} className="btn btn-danger btn-sm col-md-6">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetail;
