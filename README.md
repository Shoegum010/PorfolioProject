# Portfolio Project

This is a portfolio website built using React, Material UI. It showcases personal projects, social profiles, academic background, and a Gallery section.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Functionality Overview](#functionality-overview)
4. [Packages Used](#packages-used)
5. [Scripts](#scripts)
6. [Installation](#installation)
7. [Running the Project](#running-the-project)

## Project Overview

This portfolio website highlights projects, social links, an academic timeline, and a gallery. It employs Redux for managing the bottom navigation state and uses local storage to remember the user's selection. All Material-UI components are customized with the sx property. The home and social profile pages feature a typewriter effect for added engagement. Routing is handled by React Router DOM, while Axios is used to fetch data from the backend on the PageNotFound page, serving as a demonstration. Other pages rely on data sourced from the Constants.js file located in the Utils folder.

## Directory Structure

```bash
root/
│
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Academics.jsx
│   │   ├── BreadCrumbComponent.jsx   
│   │   ├── Dashbord.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   └── SocialProfiles.jsx
│   ├── redux/
│   │   ├── slices/
│   │   │   └── navSlice.js
│   │   │   └── systemSlice.js
│   │   └── store.js
│   ├── resources/
│   │   ├── css/
│   │   │   ├── academics.css
│   │   │   ├── breadcrumb.css
│   │   │   ├── dashbord.css
│   │   │   ├── home.css
│   │   │   ├── projects.css
│   │   │   ├── resume.css
│   │   │   └── socialprofiles.css
│   │   └── images/
│   │       └── gallery/
│   ├── Utils/
│   │   └── Constants.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── pakage.json
└── README.md
```

## Functionality Overview

### Home Page

- Personalized greeting

### Academics Page

- Cards of educational background

### Projects Page

- Grid of personal projects with descriptions.

### Profile Page

- Links to social profiles

### Resume Page

- tried to call from backend (some data for learning purpose).

### Gallery Page

- collage of images.



## Packages Used

- React
- Material UI
- React Router
- Redux Toolkit
- Typewriter-effect
- Axios

## Scripts

Runs the app in development mode

```bash
npm start
```

Builds the app for production

```bash
npm run build
```

Runs tests

```bash
npm run test
```

Checks code quality

```bash
npm run lint
```

## Installation

Clone the repository:

```bash
git clone https://github.com/Shoegum010/PorfolioProject
```

Navigate to the project directory:

```bash
cd PorfolioProject
```

Install dependencies:

```bash
npm install
```

## Running the Project

After installation, run the project locally:

```bash
npm start
```

## Acknowledgement

Special thanks to my instructors, Ashik Rai and Gigme Lepcha, for teaching the web development course online. Their guidance has been invaluable in my learning journey.