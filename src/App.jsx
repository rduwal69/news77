import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar'


import Home from './pages/Home'
import TopNews from './pages/TopNews'
import RecentNews from './pages/RecentNews'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import NewsDetail from "./components/NewsDetail";


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
          <Route path={`news/:id`} element={<NewsDetail />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
