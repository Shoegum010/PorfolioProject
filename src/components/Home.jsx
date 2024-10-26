import React from "react";
import "../resources/css/home.css";
import { Avatar, Typography } from "@mui/material";
import { userProfileDefaultData } from "../Utils/Constants";
import dpImage from "../resources/images/dpImage.JPG";
import Typewriter from 'typewriter-effect';

function Home() {
  const userName = userProfileDefaultData.Name;
  return (
    <div className="mainContainer">
      < Avatar
        src={dpImage}
        sx={{ width: "200px", height: "200px", display: "flex", mt: "50px", mb:'30px',transition:"transform 0.8s ease, box-shadow 0.3s ease",
          "&:hover":{
            transform:"scale(1.4) rotate(360deg)",
            boxShadow: "0 0 30px rgba(70, 87, 118, 0.7), 0 0 60px rgba(70, 87, 118, 0.5)",
          },
         }}
      />
      <Typography className="text-animation" variant="h5" sx={{color:"#DCA47C"}} >I'm</Typography>
      <Typography className="text-animation" variant="h1" sx={{ color: "#DCA47C",fontFamily: 'Dancing Script, cursive', }}>
        {userName}.
      </Typography>
      <Typography className="text-animation" variant="h5" sx={{color:"#7192d4",fontFamily: 'Dancing Script, cursive',}} >
      <Typewriter 
        options={{
           strings: ['a.k.a' ,'SHOEGUMM' ],
           autoStart: true,
           loop: true,
                }}
      />
      </Typography>
      
      <Typography className="text-animation1" variant="h5" sx={{
        textAlign:'center',
         m:'50px', 
         mt:'px', 
         color:'#DCA47C',
         fontFamily: '"DotGothic16", sans-serif', 
         }}>
      Aspiring computer science student with a passion for software development
      and technology. Currently pursuing a degree in Computer Science, I am skilled in <b>programming 
      languages</b> such as <b>Java</b>, <b>Python</b>, and <b>JavaScript</b>. I enjoy working
      on collaborative projects and have hands-on experience with web development, 
      data structures, and algorithms. 

      </Typography>
     
      {/* </Avatar> */}
    </div>
  );
}

export default Home;
