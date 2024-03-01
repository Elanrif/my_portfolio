import React from 'react'
import Avatar from "@mui/material/Avatar";

export default function MainRight() {
  return (
    <div className='lg:block hidden'>
      <Avatar
        alt="Remy Sharp"
        src="/images/elanrif.jpg"
        sx={{ width: 500, height: 500 }}
      />
    </div>
  );
}
