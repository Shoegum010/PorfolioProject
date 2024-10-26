import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import profimage from '../resources/images/profimage.png';
import "../resources/css/socialprofiles.css";
import Typewriter from 'typewriter-effect';


const SocialProfile = () => {
  return (
      <Box className='SPContainer' sx={{ 
        display: 'flex', 
        flexDirection: 'row',  // Change to row for horizontal layout
        alignItems: 'center', 
        justifyContent: 'center', // Center the icons horizontally
        position: 'absolute', 
        left: 0, 
        right: 0, 
        bottom: -10, 
        gap: 1.5 
      }}>
           <Typography  variant="h1" className='text' sx={{color:"#7192d4",fontFamily: 'Dancing Script, cursive',}} >
       <Typewriter
          options={{
              strings: ['Lets', 'Connect....!'],
              autoStart: true,
              loop: true,
                  }}
        />
      </Typography>
      
      <div className="image-container">
        <img src={profimage} alt='' />
      </div>
          
          <IconButton
              component="a"
              href="https://www.instagram.com/_shoegum_"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#E4405F', marginTop: 15 }} // Instagram color
          >
              <InstagramIcon sx={{ fontSize: 60 }}/>
          </IconButton>
          <IconButton
              component="a"
              href="mailto:raisugam974@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#EA4335', marginTop: 15 }} // Email color (Google)
          >
              <EmailIcon sx={{ fontSize: 60 }}/>
          </IconButton>
          <IconButton
              component="a"
              href="https://github.com/Shoegum010/PorfolioProject"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#333' }} // GitHub color
          >
              <GitHubIcon sx={{ fontSize: 60, marginTop: 15 }}/>
          </IconButton>
          <IconButton
                component="a"
                href="https://www.linkedin.com/in/sugam-rai-477a6b24a/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#0077B5', marginTop: 15 }} // LinkedIn color
            >
                <LinkedInIcon sx={{ fontSize: 60 }}/>
            </IconButton>
      </Box>
  );
};

export default SocialProfile;
