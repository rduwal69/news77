import React from 'react'
import { Link } from 'react-router-dom'

const NewsDetailPage = ({ title, description, imageUrl }) => {
    return (
        <div>
            <div className="container">
                <div className='col-md-6 my-5'>
                    <div className="card p-3">
                        <h1 className="card-title">{title}</h1>
                        <img src={imageUrl} className="card-img-top" alt='News Detail' />
                        <div className="card-body">
                            <p className="card-text">{description}</p>
                            <Link to="/" className="btn btn-dark">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetailPage
