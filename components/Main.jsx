import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import TypingAnimation from './TypingAnimation';
import Bghome from '../public/assets/home.jpg';

const Main = () => {
  return (
    <div
      className="w-full h-screen text-center relative dark:bg-cover dark:bg-center dark:bg-no-repeat dark:bg-fixed dark:bg-[url('../public/assets/home.jpg')]"
    >
      {/* Overlay for blue tint in dark mode */}
      <div className="absolute inset-0 bg-transparent dark:bg-zinc-900/30 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-300">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700 dark:text-white">
            Hi, I&#39;m <span className="">Ajeet Singh</span>
          </h1>
          <TypingAnimation />
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-gray-300">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href="https://www.linkedin.com/in/ajeet-singh-667143200/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:hover:shadow-[#5651e5] dark:hover:shadow-md">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href="https://github.com/ajeet8395"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:hover:shadow-[#5651e5] dark:hover:shadow-md">
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:ajeetsi8395@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:hover:shadow-[#5651e5] dark:hover:shadow-md">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 dark:text-white dark:hover:shadow-[#5651e5] dark:hover:shadow-md">
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
