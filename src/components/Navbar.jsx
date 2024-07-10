import React from 'react'
import './Navbar/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="">News 77</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><NavLink className="dropdown-item" to="category/politics">Politics</NavLink></li>
                                <li><NavLink className="dropdown-item" to="category/sport">Sport</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="top-news">Top News</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="recent-news">Recent News</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="contact-us">Contact Us</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>




    )
}

export default Navbar
