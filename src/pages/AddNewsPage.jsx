import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddNewsPage = () => {
    const [category, setCategory] = useState('None');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [urlToImage, setUrlToImage] = useState('');
    const [publishedAt, setPublishedAt] = useState('');
    const [content, setContent] = useState('');



    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUrlToImage(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (category === 'None') {
            toast.error("Please select the option.")
            return;
        }
        if (!title) {
            toast.error("Please enter the title");
            return;
        }
        if (!description) {
            toast.error("Please enter the description")
            return;
        }

        const newsData = {
            category,
            title,
            author,
            description,
            url,
            urlToImage,
            publishedAt,
            content,

        }

        const newNews = async () => {
            const res = await fetch('http://localhost:5000/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newsData)
            });

        }
        newNews(newsData);

        toast.success("News Added Successfully");
        resetForm();
        navigate("/addnews");

    }

    const resetForm = () => {
        setCategory('');
        setTitle('');
        setAuthor('');
        setDescription('');
        setUrl('');
        setUrlToImage('');
        setPublishedAt('');
        setContent('');
    };

    return (
        <div>
            <div className='container col-md-4 my-5'>
                <div className="card p-3">
                    <form onSubmit={submitForm} >
                        <div className="card text-white text-center" style={{ backgroundColor: '#3a4664' }}>
                            <div className="card-header">
                                <h5>Add New Article</h5>
                            </div>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="category">Select Category</label>

                            <select name='category' id='category' className="form-select" aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <option>None</option>
                                <option value="politics">Politics</option>
                                <option value="sport">Sport</option>
                            </select>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="title">Enter News Title</label>
                            <input type="text" name='title' className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="author">Enter Author Name</label>
                            <input type="text" name='author' className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="description">Description</label>
                            <textarea name='description' className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="url">Enter Source Url</label>
                            <input type="text" name='url' className="form-control" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="urlToImage">Upload Image</label>
                            <input type="file" name='urlToImage' className="form-control" id="urlToImage" onChange={handleImageChange} />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="publishedAt">Published Date</label>
                            <input type="date" name='publishedAt' className="form-control" id="publishedAt" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="content">Content</label>
                            <input type="text" name='content' className="form-control" id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                        </div>

                        <div className="form-group my-3 text-center">
                            <button type="submit" className="btn btn-primary ">Post Article</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddNewsPage
