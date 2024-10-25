import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SSSIHLImage from '../resources/images/SSSIHL.jfif';
import KVImage from '../resources/images/KV.jpg';
import SXSImage from '../resources/images/SXS.jpg';
import sssihllogo from '../resources/images/sssihllogo.jfif';
import kvlogo from '../resources/images/kvlogo.png';
import sxslogo from '../resources/images/sxslogo.jfif';


const cardData = [
  {
    title: "SRI SATHYA SAI INSTITUTE OF HIGHER LEARNING",
    subheader: "2022 - PRESENT",
    image: SSSIHLImage,
    description: " Sri Sathya Sai Institute of Higher Learning has integrated ethics and values as the undercurrent of every subject taught at the university. Combined with academic excellence, the university provides a holistic framework of inter-personal development for its students. Its compulsory residential character trains the mind, body and spirit of the student in an environment similar to the ancient Indian ‘gurukula’ system of education, in the most modern context.",
    logo:sssihllogo,
  },
  {
    title: "KENDRIYA VIDYALAYA KALIMPONG",
    subheader: "2020 - 2022 ",
    image: KVImage, // Replace with another image if needed
    description: "Kendriya Vidyalaya Kalimpong has played a pivotal role in my educational journey, embodying a spirit of holistic development and inclusivity. The school not only prioritizes academic excellence but also nurtures essential values like integrity and responsibility.KV Kalimpong truly stands out as a nurturing environment where students are encouraged to grow into well-rounded individuals, ready to make a positive impact in society.",
    logo:kvlogo,
  },
  {
    title: "ST XAVIER'S SCHOOL DAMSANG,PEDONG",
    subheader: "2005 - 2020",
    image: SXSImage, // Replace with another image if needed
    description: "St. Xavier's Pedong holds a special place in my heart, as it was the foundation of my education from kindergarten through class 10. The school is known for its warm, nurturing environment that fosters a love for learning and personal growth.I was encouraged to explore my interests and cultivate essential values like compassion and integrity. The strong sense of community at St. Xavier's, along with a variety of extracurricular activities, helped shape me into a well-rounded individual.",
    logo:sxslogo,
  },
];

export default function RecipeReviewCard() {
  const [favoriteStates, setFavoriteStates] = React.useState(Array(cardData.length).fill(false));

  const handleFavoriteClick = (index) => {
    const newFavorites = [...favoriteStates];
    newFavorites[index] = !newFavorites[index]; // Toggle the clicked card's favorite state
    setFavoriteStates(newFavorites);
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345, margin: '0 10px',backgroundImage: 'linear-gradient(to bottom, #CDE8E5, #94FFD8)' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: 'transparent', width: 56, height: 56 }}>
                <img src={card.logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={card.title}
            subheader={card.subheader}
          />
          <CardMedia
            component="img"
            height="194"
            image={card.image}
            alt={card.title}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'black' }}>
              {card.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites"  onClick={() => handleFavoriteClick(index)}>
              <FavoriteIcon sx={{ color: favoriteStates[index] ? 'red' : 'inherit' }} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
