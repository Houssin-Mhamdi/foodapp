import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsShare } from 'react-icons/bs';
import imagefirst from "../assets/img/menu/4.png";
import Rating from '../components/Rating';

export default function Recettes() {
  return (
    <section className='flex items-center justify-between gap-[10rem] mx-32'>
      <aside className=''>
        <div className='relative'>
          <img src={imagefirst} alt="" />
          <div className='absolute top-5 left-3 '>
            <AiFillHeart size={45} color='red' />
            <AiFillHeart size={45} color='black' />
          </div>
        </div>
        <div>
          <h3>Categories de la Recette</h3>
          <ul>
            <li>categorie 1</li>
            <li>categorie 2</li>
            <li>categorie 3</li>
          </ul>
        </div>
      </aside>
      <aside className=''>
        <div className='flex gap-10 mt-10 '>
          <h2>Nom de la reccette</h2>
          <button className='bg-slate-400 text-white p-1 px-5 rounded-lg flex items-center gap-5'> 
          <BsShare />
          <p>partager</p>
          </button>
        </div>
        <div className='flex gap-7 mt-10'>
          <div className='flex flex-col'>
            <p>evaluer cette recette</p>
            <Rating rating={0} />
          </div>
          <p>commenter cette recette</p>
          <p>Ajouter a mes favories</p>
        </div>
        <div className='flex gap-7 mt-10'>
          <p>1h15min de preparation</p>
          <p>1h15min de cuisson</p>
          <p>4 portion</p>
        </div>
        <div className='flex gap-7 mt-10 w-[30rem]'>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, harum asperiores quas minus at dolorum porro id eos tempora expedita et ut, possimus, quisquam corrupti nemo necessitatibus quasi numquam perspiciatis.</p>
          <aside className=''>

            <div className='w-[100%] ml-32'>
              <h3>Categories de la Recette</h3>
              <ul>
                <li>categorie 1</li>
                <li>categorie 2</li>
                <li>categorie 3</li>
              </ul>
            </div>
          </aside>
        </div>
      </aside>
    </section>
  )
}
