import React from 'react'

export default function Header() {
  
    const lien = [
      { item: <a>Acceuil</a>,bool : true },
      { item: <a>À propos</a> },
      { item: <a>Mes projets</a> },
      { item: <a>Contact</a> },
    ];


  return (
    <div className='mt-[3rem]'>
        <h1 className='text-blue-700 text-6xl font-black mb-10'>Portfolio</h1>
      <div className='flex items-center justify-center space-x-5'>
            {lien.map((data,index)=>(
        <>
        <h1 className='rounded-xl px-3 py-1 text-black bg-gray-300'>
                {data.item}
        </h1>
        </>
            ))}
      </div>
    
    </div>
  )
}
