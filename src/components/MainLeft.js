import React from "react";

export default function MainLeft() {
  return (
    <div id="propos">
      <div className="text-3xl text-gray-500  font-black">
        <h1>Bonjour à tous !.</h1>
        <h2>Je suis EL-anrif Said Baco.</h2>
      </div>
      <p className=" my-5 cursor-pointer text-blue-700">
        saidbacoelanrif@gmail.com
      </p>

      <div>
        <h1 className="text-3xl font-black text-slate-700 uppercase">
          {" "}
          À propos de moi
        </h1>
        <p className="my-5  text-slate-700 max-w-[40rem]">
          <span className="text-3xl font-black">J</span>e suis{" "}
          <strong>Elanrif Said Baco</strong>, un passionné d'informatique et un{" "}
          <strong>étudiant</strong> dévoué en{" "}
          <span className="text-blue-700">
            ingénierie informatique à l'Université Abdelmalek Essâadi de Tétouan
          </span>
          .<br />
          <span className="text-3xl font-black">O</span>riginaire de Comores{" "}
          <img src="/images/comores.png" className="inline-flex h-3 w-5" /> ,
          une ville riche en histoire et en culture. Mon parcours académique et
          mes expériences pratiques m'ont permis de développer une solide
          compréhension des principes fondamentaux de l'informatique, allant de
          la programmation à la conception de systèmes complexes. Je suis motivé
          par la recherche de solutions innovantes aux défis techniques, et je
          suis toujours à l'affût des dernières avancées technologiques.
          <br />
          <span className="text-3xl font-black">E</span>n tant qu'
          <strong>étudiant en ingénierie informatique</strong>, je m'efforce
          d'exceller académiquement tout en cherchant des occasions d'appliquer
          mes connaissances dans des projets concrets. Je crois fermement en
          l'importance de l'apprentissage continu et de la collaboration, et je
          suis impatient de contribuer de manière significative à l'avancement
          de la technologie et de la société.
        </p>
        <div>
          <q className="text-orange-600">
            L’informatique n’est qu’un outil, comme un pinceau ou un crayon.
          </q>
          <blockquote>De Griffo / Evene.fr - Novembre 2006 </blockquote>
          <></>
        </div>
      </div>
    </div>
  );
}
