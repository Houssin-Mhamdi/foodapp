import React from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
       <div className='flex justify-between items-center ml-[25rem]'>
        <li className='cursor-pointer list-none -ml-96'>
            <Link to="/"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Accueil
            </Link>
        </li>
        <li className='cursor-pointer list-none -ml-96'>
            <Link to="/recettes"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Recettes
            </Link>
        </li>
        <li className='cursor-pointer list-none -ml-96'>
            <Link to="/categories"
                className='text-xl capitalize font-primary italic hover:text-gray-500 transition-all duration-300'

            >
                Categories
            </Link>
        </li>
     
       </div>
        
    )
}
