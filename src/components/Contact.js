import React from 'react'
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div id="contact" className="bg-orange-50 p-5 mt-8">
      <div className="my-12 text-center">
        <h1 className="md:text-3xl text-xl mt-5 font-black">
          {" "}
          Contactez-moi{" "}
        </h1>
        <p className="mt-3 max-w-[48rem] mx-auto">
          Je suis ouvert à explorer de nouvelles opportunités professionnelles,
          à participer à des projets innovants et à relever de nouveaux défis
          dans le domaine de l'informatique.
        </p>
      </div>

      <div className="flex my-5 justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4  gap-3  lg:grid-cols-5  xl:grid-cols-6 lg:gap-3 justify-center items-center">
          <a
            target="_blank"
            href="https://wa.me/2120679722069"
            className="group hover:cursor-pointer duration-300 ease-in-out text-center"
          >
            <WhatsAppIcon
              sx={{ fontSize: 40 }}
              className="text-green-500 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 sm:hidden md:block">WhatsApp</p>
          </a>

          <a
            target="_blank"
            href="mailto:saidbacoelanrif@gmail.com"
            className="group hover:cursor-pointer text-center"
          >
            <MarkEmailUnreadIcon
              sx={{ fontSize: 40 }}
              className="text-red-600 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 sm:hidden md:block">E-mail</p>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/saidbaco.elanrif"
            className="group hover:cursor-pointer text-center"
          >
            <FacebookIcon
              sx={{ fontSize: 40 }}
              className="text-blue-700 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 sm:hidden md:block">Facebook</p>
          </a>
          <a
            target="_blank"
            href="https://github.com/Elanrif"
            className="group hover:cursor-pointer duration-300 ease-in-out text-center"
          >
            <GitHubIcon
              sx={{ fontSize: 40 }}
              className="text-black duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 sm:hidden md:block">Github</p>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/el-anrif-saidbaco-5633222a5/"
            className="group hover:cursor-pointer duration-300 ease-in-out text-center"
          >
            <LinkedInIcon
              sx={{ fontSize: 40 }}
              className="text-blue-500 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 sm:hidden md:block">Linkedin</p>
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/elanrifsaidbaco/"
            className="group hover:cursor-pointer duration-300 ease-in-out text-center"
          >
            <InstagramIcon
              sx={{ fontSize: 40 }}
              className="text-orange-500 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 sm:hidden md:block">Instagram</p>
          </a>
        </div>
      </div>
    </div>
  );
}
