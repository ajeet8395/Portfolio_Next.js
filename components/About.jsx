import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4 dark:text-gray-300'>Who I Am</h2>
          <p className='py-2 pb-4 text-gray-600 dark:text-gray-400'>
            I'm your front-end powerhouse, specializing in crafting mobile-friendly UIs that seamlessly integrate with backend systems. With a passion for learning and a knack for picking up new tech, I'm always ready to tackle whatever comes my way.
          </p>
          <p className='py-2 pb-4 text-gray-600 dark:text-gray-400'>
            From HTML to CSS to JavaScript, with React as my go-to tool, I've got the skills to bring your vision to life. And if there's a new tech stack on the horizon, I'll dive right in and make it my own.
            </p>
          <p className='py-2 pb-4 text-gray-600 dark:text-gray-400'>
          In my world, there's no one-size-fits-all solution. I believe in choosing the right tool for the job, whether it's mastering APIs or delving into backend wizardry.
          </p>
          <p className='py-2 pb-4 text-gray-600 dark:text-gray-400'>
          Why choose me? Because I'm not just a developer—I'm a problem-solver, a creative thinker, and a team player ready to take on any challenge. Let's join forces and create something extraordinary.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer dark:text-gray-400'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
