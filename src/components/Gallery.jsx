import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import su1Image from '../resources/images/gallery/su1.JPG';
import su2Image from '../resources/images/gallery/su2.JPG';
import su3Image from '../resources/images/gallery/su3.JPG';
import su4Image from '../resources/images/gallery/su4.jpg';
import su5Image from '../resources/images/gallery/su5.jpg';
import su6Image from '../resources/images/gallery/su6.JPG';
import su7Image from '../resources/images/gallery/su7.jpg';
import su8Image from '../resources/images/gallery/su8.jpg';
import su9Image from '../resources/images/gallery/su9.jpg';
import su10Image from '../resources/images/gallery/su10.jpeg';
import su11Image from '../resources/images/gallery/su11.JPG';
import su12Image from '../resources/images/gallery/su12.JPG';

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ width: 1030, height: 470 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: su1Image,
    title: 'Independence Day',
    author: '@Multimedia',
  },
  {
    img: su2Image,
    title: 'Handball',
    author: '@Multimedia',
  },
  {
    img: su3Image,
    title: 'Handball',
    author: '@Multimedia',
  },
  {
    img: su4Image,
    title: 'Brother',
    author: '@RituDa',
  },
  {
    img: su5Image,
    title: 'Mundu',
    author: '@Multimedia',
  },
  {
    img: su6Image,
    title: 'Independence Day',
    author: '@Anuj',
  },
  {
    img: su7Image,
    title: 'Wallpaper',
    author: '@Internet',
  },
  {
    img: su8Image,
    title: 'Sunset',
    author: '@Shoegum',
  },
  {
    img: su9Image,
    title: 'Home',
    author: '@Shoegum',
  },
  {
    img: su10Image,
    title: 'Dushera',
    author: '@Multimedia',
  },
  {
    img: su11Image,
    title: 'Janmashtami',
    author: '@Anuj',
  },
  {
    img: su12Image,
    title: 'Brother',
    author: '@Multimedia',
  },
];
