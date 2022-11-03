import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'
import App from "../App";
import Home from "../Views/Pages/Home"
import AboutMe from "../Views/Pages/AboutMe"




function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about-me' element={<AboutMe />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}








export default Router