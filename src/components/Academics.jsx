import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
export default function AccordionExpandDefault() {
  return (
    <div>
      
      <Accordion defaultExpanded sx={{ background:'linear-gradient(to bottom, #CDE8E5, #94FFD8)' }} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            
          <Typography><h1>COLLEGE/UNIVERSITY  <SchoolIcon/> </h1></Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography  >
            <h2 color='yellow'>SRI SATHYA SAI INSTITUTE OF HIGHER LEARNING</h2>
            <h4>2022 - PRESENT</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background:'linear-gradient(to bottom, #CDE8E5, #94FFD8)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography><h1>SCHOOL  <SchoolIcon/> </h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
           <h2>KENDRIYA VIDYALAYA KALIMPONG</h2>
           <h4>2021 - 2022</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background:'linear-gradient(to bottom, #94FFD8, #CDE8E5)' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography><h1>SCHOOL  <SchoolIcon/> </h1></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <h2>ST XAVIER'S SCHOOL</h2>
           <h4>2005 - 2020</h4>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
