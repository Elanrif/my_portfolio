import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function CardGithub({data}) {
  return (
    <div className="hover:scale-110 shadow-xl hover:shadow-blue-400 duration-300 ease-in-out">
      <Card sx={{ maxWidth: 345, marginTop: 7 ,height:370}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={data.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              <span className="font-black">{data.titre}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.paragraphe}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a
            href={data.lien}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-3 duration-300 ease-in-out uppercase text-slate-700 hover:text-white py-1 hover:bg-blue-600 bg-slate-100">
              Consulter
            </button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}
