import React, { useState } from 'react'
import { Link } from "react-router-dom";

const NewsItem = ({ imageUrl, title, description }) => {
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

    const generateSlug = (text) => {
        return text.toString().toLowerCase().trim()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w-]+/g, '')        // Remove all non-word chars
            .replace(/--+/g, '-')           // Replace multiple - with single -
            .replace(/^-+|-+$/g, '');       // Trim - from start and end of text
    };

    const newtitle = generateSlug(title);

    return (
        <div className='container'>
            <div className="card h-100" style={{ width: '18rem' }}>
                <img src={imageUrl} className="card-img-top" alt="News" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{renderDescription()}</p>
                    <Link to={`newsdetail/${newtitle}`} type="button" className="btn btn-dark btn-sm">Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
