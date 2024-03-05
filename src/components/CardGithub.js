import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";


export default function CardGithub({data}) {
  return (
    <div className="hover:scale-110 shadow-xl hover:shadow-blue-400 duration-300 ease-in-out">
      <Card sx={{ maxWidth: 345, marginTop: 7, height: 370 }}>
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
          <a href={data.lien?.github} target="_blank" rel="noopener noreferrer">
            <Tooltip title="Github" arrow>
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </a>
          <a
            href={data.lien?.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tooltip title="Site web" arrow>
              <IconButton>
                <LanguageIcon />
              </IconButton>
            </Tooltip>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}
