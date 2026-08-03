import React from 'react'
import { useEffect, useState } from "react";
import './index.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Help from './pages/Help/Help';
import Blog from './pages/Blog/Blog';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/help' element={<Help />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
