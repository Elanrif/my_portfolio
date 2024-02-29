import React from 'react'
import CardGithub from './CardGithub';

export default function Portfolioexp() {
 
  const projects = [
    {
      titre: "Gestion des associations étudiantes",
      paragraphe:
        "Développement d'une plateforme de gestion complète pour les associations étudiantes, utilisant React JS pour le frontend et Spring Boot pour le backend.",
      image: "",
      lien: "https://github.com/Elanrif/Gestion_des_associations_etudiante",
    },
    {
      titre: "Gestion de vente d'articles",
      paragraphe:
        "Développement d'une application de gestion de vente de commerce électronique, utilisant Spring boot pour le backend et React Js pour le frontend.",
      image: "/images/vente.png",
      lien: "https://github.com/Elanrif/full_stack_gestion_vente_article",
    },
    {
      titre: "Gestion de centre de formation",
      paragraphe:
        "Développement d'un système de gestion pour un centre de formation , utilisant principalement Spring Boot , ReactJs pour le frontend et Node.js pour le backend.",
      image: "/images/centre-formation.png",
      lien: "https://github.com/Elanrif/gestion_centre_formation",
    },
  ];


  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl mt-5 font-black"> Projets réalisé </h1>
        <p className="mt-3 max-w-[48rem] mx-auto">
          Voici quelques exemples de projet que j'ai réalisé. n'hésitez pas à y
          aller jéter un coup d'oeil.
        </p>
      </div>

  <div className='flex justify-center'>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-5 justify-center items-center">
        {projects.map((item,index)=>{
          return(
            <div key={index}>
            <CardGithub data={item}/>
            </div>
          )
        })}
      </div>
  </div>
    </>
  );
}
