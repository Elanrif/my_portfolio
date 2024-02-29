import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
import Competences from "./Competences";

export default function Main() {
  return (
    <>
      <div className="mt-10 p-4 text-center text-slate-600 rounded-2xl bg-orange-100">
        <h1 className="text-3xl font-black">EL-anrif Said Baco</h1>
        <p className="my-2">Étudiant en Master d'Ingénierie Informatique</p>
        <h1 className="rounded-xl px-3 py-2 uppercase"> Qui-suis je ? </h1>
      </div>

      <div className="flex mt-[4rem] space-x-7  items-center">
        <MainLeft />
        <MainRight />
      </div>

      <div className="my-10 p-4 text-center bg-orange-100 text-slate-700 rounded-xl">
        <h1 className="text-3xl font-black">Actuellement </h1>
        <p className="my-4">
          À la recherche d'un stage PFE de développement Informatique
        </p>
        <h1 className="rounded-xl px-3 py-2 uppercase">
          {" "}
          Je suis ouvert à tout discussion.{" "}
        </h1>
      </div>
      <Competences/>
    </>
  );
}
