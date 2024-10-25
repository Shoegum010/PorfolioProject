import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import html from '../resources/images/html.png';
import java from '../resources/images/java.png';
import Cplus from '../resources/images/C++.png';
import flask from '../resources/images/flask.webp';
import node from '../resources/images/node.png';
import python from '../resources/images/python.webp';
import react from '../resources/images/react.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, background: 'linear-gradient(to bottom, #CDE8E5, #94FFD8)', display: 'flex',borderRadius: 20, height: 500}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 3, borderColor: 'divider' }}
      >
           <Tab 
        label={
          <span>
            <img src={react} alt="Logo" style={{ width: '120px', height: '100px', marginRight: '6px' }} />
      
          </span>
        } 
        {...a11yProps(0)} 
      />
         <Tab 
        label={
          <span>
            <img src={java} alt="Logo" style={{ width: '100px', height: '80px', marginRight: '6px' }} />
      
          </span>
        } 
        {...a11yProps(1)} 
      />
         <Tab 
        label={
          <span>
            <img src={Cplus} alt="Logo" style={{ width: '100px', height: '80px', marginRight: '6px' }} />
      
          </span>
        } 
        {...a11yProps(2)} 
      />
         <Tab 
        label={
          <span>
            <img src={Cplus} alt="Logo" style={{ width: '100px', height: '80px', marginRight: '6px' }} />
      
          </span>
        } 
        {...a11yProps(3)} 
      />
         <Tab 
        label={
          <span>
            <img src={node} alt="Logo" style={{ width: '100px', height: '80px', marginRight: '6px' }} />
      
          </span>
        } 
        {...a11yProps(4)} 
      />
         <Tab 
        label={
          <span>
            <img src={python} alt="Logo" style={{ width: '160px', height: '100px', marginRight: '6px' }} />
      
          </span>
        } 
        {...a11yProps(5)} 
      />
        <Tab 
        label={
          <span>
            <img src={flask} alt="Logo" style={{ width: '140px', height: '60px', marginRight: '6px' }} />
      
          </span>
        } 
        {...a11yProps(6)} 
      />
       <Tab 
        label={
          <span>
            <img src={html} alt="Logo" style={{ width: '140px', height: '60px', marginRight: '6px' }} />
      
          </span>
        } 
        {...a11yProps(7)} 
      />
       
      </Tabs>
      <TabPanel value={value} index={0}>
      <Typography  sx={{ color: "#DCA47C",fontFamily: 'Lobster, cursive', }}><h1>Portfolio Website</h1></Typography>
      <Typography><p>  I successfully built a fully responsive portfolio website using React,<br /> 
      which effectively showcases my diverse range of projects.This interactive platform allows<br />
      visitors to navigate seamlessly through my work,explore individual projects in detail, and <br />
      gain a comprehensive understanding of my skills and experiences in web development.Ultimately,<br /> 
      this portfolio serves as a testament to my dedication to creating visually appealing and user-friendly digital solutions.</p></Typography>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
      <Typography sx={{ color: "#DCA47C",fontFamily: 'Lobster, cursive', }} ><h1>2D SNAKE GAME</h1></Typography>
      <Typography><p> I used a Java applet to create a functional snake game,<br />
      which provides an engaging and interactive experience for players. The game features<br />
      intuitive controls, challenging gameplay, and a scoring system that keeps players<br />
      motivated to beat their high scores. Additionally, I implemented various levels of<br />
      difficulty to enhance the overall gaming experience.</p></Typography>
      </TabPanel>
      
      <TabPanel value={value} index={2}>
      <Typography  sx={{ color: "#DCA47C",fontFamily: 'Lobster, cursive', }}><h1>File Organizer</h1></Typography>
      <Typography><p>I used C++ to create a terminal application,<br />
      which provides a user-friendly interface for various functionalities. The app<br />
      allows users to perform tasks efficiently, with features such as data input,<br />
      processing, and output display. Additionally, I incorporated error handling<br />
      and optimized performance to ensure a smooth user experience.</p></Typography>
      </TabPanel>
      
      <TabPanel value={value} index={3}>
      <Typography  sx={{ color: "#DCA47C",fontFamily: 'Lobster, cursive', }}><h1>Task Manager</h1></Typography>
      <Typography sx={{ fontFamily: '"Tourney", cursive',textAlign: 'left',m: '20px',color: '#DCA47C',}}>
        <p>I created a simple command-line task management tool in C++,<br />
      designed specifically for tracking personal tasks. This tool allows users<br />
      to add, edit, and remove tasks easily, providing a straightforward interface<br />
      for organizing daily activities. Additionally, I implemented features such as<br />
      task prioritization and deadline reminders to enhance productivity.</p></Typography>
      </TabPanel>
      
      <TabPanel value={value} index={4}>
      <Typography  sx={{ color: "#DCA47C",fontFamily: 'Lobster, cursive', }}><h1>Chat Application</h1></Typography>
      <Typography><p>I created a real-time chat application using Node.js and Socket.io,<br />
      designed for seamless messaging between users. The application supports<br />
      features such as private messaging, group chats, and real-time notifications,<br />
      ensuring an engaging communication experience. Additionally, I implemented<br />
      user authentication to enhance security and user management.</p></Typography>
      </TabPanel>
      
      <TabPanel value={value} index={5}>
      <Typography  sx={{ color: "#DCA47C",fontFamily: 'Lobster, cursive', }}><h1>Personal Blog</h1></Typography>
      <Typography><p>I built a personal blog using Python and Flask,<br />
      designed for easy content management and publishing. The blog features<br />
      a user-friendly interface for creating, editing, and deleting posts,<br />
      allowing for seamless updates and organization of content. Additionally,<br />
      I implemented categorization and search functionality to enhance user navigation.</p></Typography>
      </TabPanel>
      
      <TabPanel value={value} index={6}>
      <Typography  sx={{ color: "#DCA47C",fontFamily: 'Lobster, cursive', }}><h1>Todo List Web App</h1></Typography>
      <Typography><p>I built a to-do list web app using Python and Flask,<br />
      designed for easy task management and organization. The app features<br />
      a user-friendly interface for adding, editing, and deleting tasks,<br />
      allowing users to keep track of their daily activities effortlessly.<br />
      Additionally, I implemented task categorization and priority settings to enhance usability.</p></Typography>
      </TabPanel>
      
      <TabPanel value={value} index={7}>
      <Typography  sx={{ color: "#DCA47C",fontFamily: 'Lobster, cursive', }}><h1>Stores website</h1></Typography>
      <Typography><p>I successfully designed and developed a fully responsive store website, leveraging the<br/>
 capabilities of HTML, CSS, and JavaScript. This dynamic platform not only showcases my diverse<br/>
 range of projects but also provides an interactive experience for visitors. With carefully crafted<br/>
 layouts and engaging visuals, users can easily navigate through my work, explore individual projects<br/>
 in depth, and gain a comprehensive understanding of my skills, experiences, and the creative<br/>
 processes behind each piece. Ultimately, this portfolio serves as a testament to my dedication <br/>
 to web development and my ability to create visually appealing and user-friendly digital solutions.</p></Typography>
      </TabPanel>
      
    </Box>
  );
}
