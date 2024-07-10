import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'


import Home from './pages/Home'
import TopNews from './pages/TopNews'
import RecentNews from './pages/RecentNews'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import NewsDetail from "./components/NewsDetail";
import AddNewsPage from "./pages/AddNewsPage";
import Politics from "./components/category/Politics";
import Sport from "./components/category/Sport";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-news" element={<TopNews />} />
          <Route path="/recent-news" element={<RecentNews />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path={'category/:category/:id'} element={<NewsDetail />} />
          <Route path="/addnews" element={<AddNewsPage/>} />
          <Route path="category/politics" element={<Politics />} />
          <Route path="category/sport" element={<Sport />} />


        </Routes>
      </Router>
    </div>
  )
}

export default App
