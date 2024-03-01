import React from "react";
import MainLeft from "./MainLeft";
import MainRight from "./MainRight";
export default function Main() {
  return (
    <>
      <div className="mt-10 p-4 text-center text-slate-600 rounded-2xl bg-orange-50">
        <h1 className="md:text-3xl text-xl font-mono font-black">
          EL-anrif Said Baco
        </h1>
        <p className="my-2">Étudiant en Master d'Ingénierie Informatique</p>
        <h1 className="rounded-xl px-3 py-2 uppercase"> Qui-suis je ? </h1>
      </div>

      <div className="flex mt-[2rem] space-x-7  items-center">
        <MainLeft />
        <MainRight />
      </div>

      <div className="my-10 p-4 text-center bg-orange-50 text-slate-700 rounded-xl">
        <h1 className="md:text-3xl text-xl font-black">Actuellement </h1>
        <p className="my-4">
          À la recherche d'un stage PFE de développement Informatique
        </p>
        <q className="rounded-xl italic px-3 py-2 uppercase">
          {" "}
          Je suis ouvert à toute discussion.{" "}
        </q>
      </div>
    </>
  );
}
