import React from 'react'
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function CompetenceLeft() {
  return (
    <div className="lg:block hidden">
      <div>
        <h1 className="font-serif text-4xl font-black text-slate-900 mb-5">
          Back END
        </h1>
        <Box sx={{ width: 600 }}>
          <h1 className="font-black text-slate-700 ">
            Spring boot,Mvc,Security
          </h1>
          <Slider
            defaultValue={70}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>

        <Box sx={{ width: 600 }}>
          <h1 className="font-black text-slate-700 ">Laravel-Php</h1>
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
      </div>

      <div>
        <h1 className="font-serif text-4xl font-black text-slate-900 mb-5">
          Front END
        </h1>
        <Box sx={{ width: 600 }}>
          <h1 className="font-black text-slate-700 ">React Js</h1>
          <Slider
            defaultValue={90}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>

        <Box sx={{ width: 600 }}>
          <h1 className="font-black text-slate-700 ">Angular</h1>
          <Slider
            defaultValue={30}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
        <Box sx={{ width: 600 }}>
          <h1 className="font-black text-slate-700 ">Html,Css,JavaScript</h1>
          <Slider
            defaultValue={90}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
        <Box sx={{ width: 600 }}>
          <h1 className="font-black text-slate-700 ">TailwindCss</h1>
          <Slider
            defaultValue={90}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
        <Box sx={{ width: 600 }}>
          <h1 className="font-black text-slate-700 ">Boostrap</h1>
          <Slider
            defaultValue={90}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
        <Box sx={{ width: 600 }}>
          <h1 className="font-black text-slate-700 ">Material-ui</h1>
          <Slider
            defaultValue={95}
            aria-label="Default"
            valueLabelDisplay="auto"
          />
        </Box>
      </div>
    </div>
  );
}
