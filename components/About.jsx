import React from 'react';
import Link from 'next/link';

const About = () => {
  const textStyle = 'py-2 pb-4 text-gray-600 dark:text-gray-400'; // Common text styles
  const headerStyle = 'uppercase text-xl tracking-widest text-[#5651e5]';

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {/* Left Section */}
        <div className='md:col-span-2'>
          <h2 className='text-4xl font-bold tracking-widest text-[#5651e5]'>About</h2>
          <p className={textStyle}>
            I{`'`}m your front-end powerhouse, specializing in crafting mobile-friendly UIs that seamlessly integrate with backend systems. With a passion for learning and a knack for picking up new tech, I{`'`}m always ready to tackle whatever comes my way.
          </p>
          <p className={textStyle}>
            From HTML to CSS to JavaScript, with React as my go-to tool, I{`'`}ve got the skills to bring your vision to life. And if there{`'`}s a new tech stack on the horizon, I{`'`}ll dive right in and make it my own.
          </p>
          <p className={textStyle}>
            In my world, there{`'`}s no one-size-fits-all solution. I believe in choosing the right tool for the job, whether it{`'`}s mastering APIs or delving into backend wizardry.
          </p>
          <p className={textStyle}>
            Why choose me? Because I{`'`}m not just a developer—I{`'`}m a problem-solver, a creative thinker, and a team player ready to take on any challenge. Let{`'`}s join forces and create something extraordinary.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer dark:text-gray-400'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

        {/* Right Section with GIF */}
        <div className='m-auto'>
          <img
            src='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnlpNG1xdWlxanA3NnpmMzMwcDh1aXplcW01d3c3MDgzbTZwNjF3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif'
            alt='Programming GIF'
            className='rounded-full cursor-pointer hover:bg-[#5651e5] hover:shadow-xl'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
