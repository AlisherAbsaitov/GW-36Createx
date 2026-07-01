import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Event from './pages/Event'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <React.Fragment>
      <ToastContainer/>
      <Header />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About/> } />
        <Route path='/contact' element={<Contact/> } />
        <Route path='/course' element={<Courses/> } />
        <Route path='/event' element={<Event/> } />
        <Route path='/blog' element={<Blog/> } />
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}
