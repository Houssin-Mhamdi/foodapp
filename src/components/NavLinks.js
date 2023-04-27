import React from 'react'
import { Route, Routes } from "react-router-dom"
import Categories from '../Pages/Categories'
import Home from '../Pages/Home'
import Recettes from '../Pages/Recettes'
export default function NavLinks() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recettes" element={<Recettes />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </div>
    )
}
