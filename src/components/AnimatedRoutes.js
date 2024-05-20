import React from 'react'
import { useLocation } from 'react-router-dom'
import { Routes, Route} from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";

import { AnimatePresence } from "framer-motion"
function AnimatedRoutes() {
    const location = useLocation()

    return (
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes
