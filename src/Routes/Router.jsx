import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import React from 'react'
import App from "../App";


function Router() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}








export default Router