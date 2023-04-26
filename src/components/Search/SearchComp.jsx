import React from 'react';
import { BsSearch } from "react-icons/bs";
//{SetAutherSearch,autherSearch}
//onChange={(e)=>SetAutherSearch(e.target.value)} value={autherSearch}
export default function SearchComp() {
    return (

        <section className='mt-8 mb-5 ml-80'>
            <div className='relative'>
                <input type="text" placeholder='Search...' className='w-[20rem] h-10 rounded-lg p-3 shadow-lg border-2' />
                <BsSearch className='absolute top-2 right-[1rem] text-black text-2xl' />
            </div>
        </section>

    )
}