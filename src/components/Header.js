import React from 'react'

export default function Header() {
  
    const lien = [
      { item: <a href="#acceuil">Acceuil</a>, bool: true },
      {
        item: (
          <a href="#propos" smooth>
            À propos
          </a>
        ),
      },
      { item: <a href="#competences">Compétences</a> },
      {
        item: (
          <a href="#projets" smooth>
            Mes projets
          </a>
        ),
      },
      { item: <a href="#contact">Contact</a> },
    ];


  return (
    <div className="mt-[3rem]">
      <h1 id="acceuil" className="text-blue-700 md:text-6xl text-3xl font-black mb-10">Portfolio</h1>
      <div className="hidden md:flex items-center justify-center space-x-5">
        {lien.map((data, index) => (
          <div
            className="hover:cursor-pointer rounded-xl px-3 py-1 text-black bg-gray-300 duration-300 ease-in-out"
            key={index}
          >{data.item}
          </div>
        ))}
      </div>
    </div>
  );
}
