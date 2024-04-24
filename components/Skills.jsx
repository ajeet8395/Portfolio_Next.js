import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png'
import Bootstrap from '../public/assets/skills/bootstrap.png'
import WordPress from '../public/assets/skills/wordpress2.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4 dark:text-gray-300'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-purple-700/40'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-purple-700/40'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-purple-700/40'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-purple-700/40'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-purple-700/40'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-purple-700/40'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Bootstrap} width='74px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-purple-700/40'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 hover:shadow-purple-700/40'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 dark:hover:shadow-purple-700/40'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={WordPress} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center dark:text-gray-400'>
                <h3>WordPress</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
