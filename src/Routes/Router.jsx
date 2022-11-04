import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react'
import App from "../App";
import Home from "../Views/Pages/Home"
import AboutMe from "../Views/Pages/AboutMe"
import Profile from "../Views/Pages/Profile"
import Dashboard from "../Views/Components/Dashboard"
import ContactMe from "../Views/Pages/ContactMe";
import Upload from "../Views/Pages/Upload"



function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard />}>
                <Route index element={<App />} />
                <Route path='my-files' element={<Home />} />
                <Route path='upload' element={<Upload />} />
                <Route path='profile' element={<Profile />} />
                <Route path='about-me' element={<AboutMe />} />
                <Route path='contact-me' element={<ContactMe />} />
                
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}








export default Router