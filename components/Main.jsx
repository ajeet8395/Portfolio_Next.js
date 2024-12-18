import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import TypingAnimation from './TypingAnimation';

const Main = () => {

  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-slate-500'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700 dark:text-slate-300'>
            Hi, I&#39;m <span className=''> Ajeet Singh</span>
          </h1>
          <TypingAnimation/>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-slate-500'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <Link
              href='https://www.linkedin.com/in/ajeet-singh-667143200/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:hover:shadow-purple-700/40 dark:hover:shadow-md'>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href='https://github.com/ajeet8395'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:hover:shadow-purple-700/40 dark:hover:shadow-md'>
                <FaGithub />
              </div>
            </Link>
            <Link href='mailto:ajeetsi8395@gmail.com'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:hover:shadow-purple-700/40 dark:hover:shadow-md'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:hover:shadow-purple-700/40 dark:hover:shadow-md'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
