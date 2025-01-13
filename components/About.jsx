import React from 'react';
import Link from 'next/link';

const About = () => {
  const textStyle = 'py-2 pb-4 text-gray-600 dark:text-gray-400';
  const headerStyle = 'uppercase text-xl tracking-widest text-[#5651e5]';

  return (
    <div id='about' className='w-full md:h-screen p-2 px-4 lg:px-2 flex items-center bg-gray-100 dark:bg-neutral-900 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col-reverse md:grid md:grid-cols-3 gap-8'>
        <div className='md:col-span-2'>
          <h2 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500'>About</h2>
          <p className={textStyle}>
            I'm a Web Developer with 2+ years of experience creating mobile-friendly, user-focused interfaces that seamlessly integrate with backend systems. With a strong foundation in HTML, CSS, JavaScript, and advanced expertise in React.js, I specialize in transforming ideas into intuitive, responsive, and engaging web applications.          </p>
          <p className={textStyle}>
            Over the years, I’ve worked on live projects that required close collaboration with backend and UI/UX teams, enhancing performance and delivering before deadlines. Whether it’s integrating APIs, optimizing performance, or exploring cutting-edge tech stacks, I adapt quickly and deliver effective solutions.          </p>
          <p className={textStyle}>
            I’m passionate about crafting tailored solutions, selecting the right tools for each challenge, and ensuring every project exceeds expectations. With hands-on experience in Next.js, Tailwind CSS, Node.js, and MongoDB, I thrive at the intersection of creativity and problem-solving.          </p>
          <p className={textStyle}>
            Why choose me? Because I’m more than a developer—I’m a collaborator, an innovator, and a lifelong learner committed to turning your vision into reality. Let’s build something exceptional together.          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer dark:text-gray-400'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

        <div className='m-auto'>
          <img
            src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnlpNG1xdWlxanA3NnpmMzMwcDh1aXplcW01d3c3MDgzbTZwNjF3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif'
            alt='Programming GIF'
            className='rounded-full cursor-pointer hover:bg-[#5651e5] hover:shadow-xl w-72 h-72 md:w-96 md:h-96'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
