import React from 'react'
import CompetenceLeft from './CompetenceLeft';
import CompetenceRight from './CompetenceRight';

export default function Competences() {
  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-3xl text-slate-700 font-black">Compétences </h1>
        <p className="mt-3 max-w-[48rem] mx-auto">
          Elles sont en constante amélioration, car la joie de ce métier réside
          dans l'apprentissage continu, surtout en étant impliqué, curieux et
          passionné.
        </p>
      </div>

      <div className="flex justify-around">
        <CompetenceLeft />
        <CompetenceRight />
      </div>

      <div className="mt-10 p-4 text-center text-slate-600 bg-orange-100">
        <h1 className="text-3xl font-black">PARAGRAPHE </h1>
        <p className="my-4">CITATION ....</p>
      </div>
    </>
  );
}
