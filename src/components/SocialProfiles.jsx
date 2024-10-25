import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Face6Icon from '@mui/icons-material/Face6';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { Avatar, Typography } from "@mui/material";
import bell from '../resources/images/bell.gif';
import "../resources/css/socialprofiles.css";
const actions = [
  { icon: <GitHubIcon />, 
    name: 'GitHub',
    href:"https://github.com/Shoegum010", 
    backgroundColor: "#000",
    target:"_blank"},
  { icon: <InstagramIcon />, 
    name: 'Instagram',
    href:"https://www.instagram.com/_shoegum_",
    color: "#e1306c",
    target:"_blank" },
  { icon: <LinkedInIcon />,
    name: 'Linkedin',
    color: "#0077b5",
    href:"https://www.linkedin.com/in/sugam-rai-477a6b24a/" },
  { icon: <EmailIcon />,
    name: 'Mail',
    color: "primary.main", 
    href:"https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkWHwTrBnPTJCpNHPsMlKmDPqQKjpQZDkRXnKbmwXMZLsrqfTWnwflqqkQRStRhRDgxwL",
    target:"_blank" },
];

export default function BasicSpeedDial() {
  return (
    <Box className='SPContainer'>
       <Typography  variant="h1" sx={{ color: "#DCA47C",fontFamily: 'Lobster, cursive', }}>Lets Connect </Typography>
       <div className="image-container">
        <img src={bell} alt="guitar gif" />
      </div>

      <SpeedDial className='speedDial'
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom:16 , right: 60 }}
        icon={<Face6Icon />}
      >

        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            href={action.href}
            backgroundColor={action.backgroundColor}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
       
      
    </Box>
   
  );
}