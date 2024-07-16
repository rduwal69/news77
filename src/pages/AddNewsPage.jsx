import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddNewsPage = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = async (data) => {
        if (data.urlToImage && data.urlToImage[0]) {
            const reader = new FileReader();
            reader.onloadend = async () => {
                const imageDataUrl = reader.result;
                const newsData = { ...data, urlToImage: imageDataUrl };
                const res = await fetch('http://localhost:5000/articles', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newsData)
                });
                toast.success("News Added Successfully");
                reset();
                navigate("/addnews");

            }
            reader.readAsDataURL(data.urlToImage[0]);
        }

    }

    return (
        <div>
            <div className='container col-md-4 my-5'>
                <div className="card p-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="" style={{ color: '#007be5' }}>
                            <div className="">
                                <h4>Post the latest articles and headlines</h4>
                            </div>
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="category">Select Category</label>
                            <select
                                name='category'
                                id='category'
                                className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                                {...register('category', { required: "Category is required" })}
                            >
                                <option value="">Please select the category</option>
                                <option value="politics">Politics</option>
                                <option value="sport">Sport</option>
                            </select>
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="title">Enter News Title</label>
                            <input
                                type="text"
                                name='title'
                                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                                id="title"
                                {...register('title', { required: "Title is required" })}
                            />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="author">Enter Author Name</label>
                            <input
                                type="text"
                                name='author'
                                className="form-control"
                                id="author"
                                {...register('author')}
                            />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="description">Description</label>
                            <textarea
                                name='description'
                                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                id="description"
                                rows="3"
                                {...register('description', { required: "Description is required" })}
                            ></textarea>
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="url">Enter Source Url</label>
                            <input
                                type="text"
                                name='url'
                                className="form-control"
                                id="url"
                                {...register('url')}
                            />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="urlToImage">Upload Image</label>
                            <input
                                type="file"
                                name='urlToImage'
                                className="form-control"
                                id="urlToImage"
                                {...register('urlToImage')}

                            />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="publishedAt">Published Date</label>
                            <input
                                type="date"
                                name='publishedAt'
                                className="form-control"
                                id="publishedAt"
                                {...register('publishedAt')}
                            />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="content">Content</label>
                            <input
                                type="text"
                                name='content'
                                className="form-control"
                                id="content"
                                {...register('content')}
                            />
                        </div>

                        <div className="form-group my-3 text-center">
                            <button type="submit" className="btn btn-primary">Post Article</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddNewsPage;