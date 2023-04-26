import React from 'react'
import { Route, Routes } from "react-router-dom"
import App from '../App'
import Categories from '../Pages/Categories'
import Recettes from '../Pages/Recettes'
export default function NavLinks() {
    return (
        <div>
            <Routes>
                <Route path="/" />
                <Route path="/recettes" element={<Recettes />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </div>
    )
}
