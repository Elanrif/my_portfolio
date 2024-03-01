import React from 'react'
import CompetenceLeft from './CompetenceLeft';
import CompetenceRight from './CompetenceRight';
import Slider from "react-slick";


export default function Competences() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

  return (
    <>
      <div id="competences" className="text-center my-5">
        <h1 className="text-3xl text-slate-700 font-black">Compétences </h1>
        <p className="mt-3 max-w-[48rem] mx-auto">
          Elles sont en constante amélioration, car la joie de ce métier réside
          dans l'apprentissage continu, surtout en étant impliqué, curieux et
          passionné.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-y-[2rem] xl:gap-y-0 xl:grid-cols-2 xl:gap-x-[14rem]">
        <CompetenceLeft />
        <CompetenceRight />
      </div>

      <Slider {...settings}>
        <div className="flex  mt-10 justify-center items-center text-white bg-blue-600 h-[17rem] sm:h-[13rem] md:h-[10rem]">
          <div className="p-8 text-center ">
            <h1 className="text-lg font-black">
              Steve Jobs Homme d'affaire, Informaticien, Inventeur (1955 - 2011)
            </h1>

            <div className="mx-auto py-3 max-w-[50rem]">
              <q>
                Dans les affaires, Les grandes choses ne sont jamais faites par
                une seule personne, elles sont faites par toute une équipe.
              </q>
            </div>
          </div>
        </div>

        <div className="flex  mt-10 justify-center items-center text-white bg-blue-600 h-[17rem] sm:h-[13rem] md:h-[10rem]">
          <div className=" md:h-52 p-8 text-center ">
            <h1 className="text-lg font-black">
              Alan Greenspan économiste, Scientifique (1926 - ){" "}
            </h1>

            <div className="mx-auto py-3 max-w-[50rem]">
              <q>
                La technologie de l'information a changé la façon dont les gens
                créent de la valeur économique.
              </q>
            </div>
          </div>
        </div>

        <div className="flex  mt-10 justify-center items-center text-white bg-blue-600 h-[17rem] sm:h-[13rem] md:h-[10rem]">
          <div className=" md:h-52 p-8 text-center ">
            <h1 className="text-lg font-black">
              Larry Page Entrepreneur, Homme d'affaire, Informaticien (1973 - )
            </h1>

            <div className="mx-auto py-3 max-w-[50rem]">
              <q>
                La technologie devrait faire le travail acharné pour que les
                gens puissent faire les choses qui les rendent les plus heureux
                dans la vie.
              </q>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}
