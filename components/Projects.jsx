import Image from 'next/image';
import React from 'react';
import currconvt from '../public/assets/projects/currencyconvertor.png';
import formbuilder from '../public/assets/projects/formbuilder.png';
import weather from '../public/assets/projects/weather.png';
import rockpaper from '../public/assets/projects/rockpaper.png';
import brainwave from '../public/assets/projects/brainwave.png';
import ProjectsCarousel from './ProjectsCarousel';

const Projects = () => {
  const projects = [
    {
      title: 'Brainwave',
      backgroundImg: brainwave,
      projectUrl: 'https://brainwave-ajeet.vercel.app/',
      projectCode: 'https://github.com/ajeet8395/Brainwave/',
      tech: 'Reactjs'
    },
    {
      title: 'Form builder Pro',
      backgroundImg: formbuilder,
      projectUrl: 'https://form-builder-pro-qosq.vercel.app/',
      projectCode: 'https://github.com/ajeet8395/FormBuilderPro',
      tech: 'Next JS'
    },
    {
      title: 'Netflix App',
      backgroundImg: weather,
      projectUrl: '/',
      projectCode: 'https://github.com/ajeet8395/Weather-Application',
      tech: 'React JS'
    },
    {
      title: 'Rock Paper Scissors',
      backgroundImg: rockpaper,
      projectUrl: 'https://ajeet8395.github.io/Rock-Paper-Scissors/',
      projectCode: 'https://github.com/ajeet8395/Rock-Paper-Scissors',
      tech: 'Next JS'
    }
  ];

  return <ProjectsCarousel projects={projects} />;
};

export default Projects;