import React from 'react'
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="bg-orange-50 p-5 mt-8">
      <div className="my-12 text-center">
        <h1 className="text-3xl mt-5 font-black"> Contactez-moi </h1>
        <p className="mt-3 max-w-[48rem] mx-auto">
          Je suis ouvert à explorer de nouvelles opportunités professionnelles,
          à participer à des projets innovants et à relever de nouveaux défis
          dans le domaine de l'informatique.
        </p>
      </div>

      <div className="flex my-5 justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 gap-3 justify-center items-center">
          <div className="group hover:cursor-pointer text-center">
            <MarkEmailUnreadIcon
              sx={{ fontSize: 40 }}
              className="text-red-600 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 ">Par Email</p>
          </div>
          <div className="group hover:cursor-pointer text-center">
            <FacebookIcon
              sx={{ fontSize: 40 }}
              className="text-blue-700 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 ">Facebook</p>
          </div>
          <div className="group hover:cursor-pointer duration-300 ease-in-out text-center">
            <GitHubIcon
              sx={{ fontSize: 40 }}
              className="text-black duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 ">Github</p>
          </div>
          <div className="group hover:cursor-pointer duration-300 ease-in-out text-center">
            <LinkedInIcon
              sx={{ fontSize: 40 }}
              className="text-blue-500 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 ">Linkedin</p>
          </div>
          <div className="group hover:cursor-pointer duration-300 ease-in-out text-center">
            <WhatsAppIcon
              sx={{ fontSize: 40 }}
              className="text-green-500 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 ">Whatsap</p>
          </div>
          <div className="group hover:cursor-pointer duration-300 ease-in-out text-center">
            <InstagramIcon
              sx={{ fontSize: 40 }}
              className="text-orange-500 duration-300 ease-in-out group-hover:scale-125"
            />
            <p className="text-slate-600 ">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}
