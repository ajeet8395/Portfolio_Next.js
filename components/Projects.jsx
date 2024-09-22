import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import currconvt from '../public/assets/projects/currencyconvertor.png';
import formbuilder from '../public/assets/projects/formbuilder.png';
import weather from '../public/assets/projects/weather.png';
import rockpaper from '../public/assets/projects/rockpaper.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4 dark:text-gray-300'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Currency Convertor'
            backgroundImg={currconvt}
            projectUrl='https://ajeet8395.github.io/Currency-Convertor/'
            projectCode='https://github.com/ajeet8395/Currency-Convertor'
            tech='JavaScript'
          />
          <ProjectItem
            title='Form builder Pro'
            backgroundImg={formbuilder}
            projectUrl='https://form-builder-pro-qosq.vercel.app/'
            projectCode='https://github.com/ajeet8395/FormBuilderPro'
            tech='Next JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={weather}
            projectUrl='/'
            projectCode='https://github.com/ajeet8395/Weather-Application'
            tech='React JS'

          />
          <ProjectItem
            title='Rock Paper Scissors'
            backgroundImg={rockpaper}
            projectUrl='https://ajeet8395.github.io/Rock-Paper-Scissors/'
            projectCode='https://github.com/ajeet8395/Rock-Paper-Scissors'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
