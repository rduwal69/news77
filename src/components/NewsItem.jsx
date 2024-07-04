import React, { useState } from 'react'
import { Link } from "react-router-dom";

const NewsItem = ({id,imageUrl, title, description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
    const renderDescription = () => {
        if (showFullDescription) {
            return (
                <>
                    {description}
                    <span onClick={toggleDescription} style={{ color: 'blue', cursor: 'pointer' }}>
                        {' '}
                        Less
                    </span>
                </>
            );
        } else {
            const truncatedDescription = description.length > 100 ? description.substring(0, 100) + '...' : description;
            return (
                <>
                    {truncatedDescription}
                    {description.length > 100 && (
                        <span onClick={toggleDescription} style={{ color: 'blue', cursor: 'pointer' }}>
                            {' '}
                            More
                        </span>
                    )}
                </>
            );
        }
    };

    return (
        <div className='container'>
            <div className="card h-100" style={{ width: '18rem' }}>
                <img src={imageUrl} className="card-img-top" alt="News" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{renderDescription()}</p>
                    <Link to={`news/${id}`} type="button" className="btn btn-dark btn-sm">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
