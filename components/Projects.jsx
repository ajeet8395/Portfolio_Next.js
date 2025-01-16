import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import brainwave from '../public/assets/projects/brainwave.png';
import formbuilder from '../public/assets/projects/formbuilder.png';
import weather from '../public/assets/projects/weather.png';
import rockpaper from '../public/assets/projects/rockpaper.png';
import diwali from '../public/assets/projects/diwali.png';
import socket from '../public/assets/projects/socket.png';
import videoCall from '../public/assets/projects/video.png';
import apple from '../public/assets/projects/apple.png';

const Projects = () => {
  const projects = [
    {
      title: 'Diwali',
      backgroundImg: diwali,
      projectUrl: 'https://diwali-fawn.vercel.app/',
      projectCode: 'https://github.com/ajeet8395/Diwali/',
      tech: 'Reactjs'
    },
    {
      title: 'Socket Talk',
      backgroundImg: socket,
      projectUrl: 'https://sockettalk.onrender.com/login',
      projectCode: 'https://github.com/ajeet8395/SocketTalk',
      tech: 'Reactjs'
    },
    {
      title: 'Brainwave',
      backgroundImg: brainwave,
      projectUrl: 'https://brainwave-ajeet.vercel.app/',
      projectCode: 'https://github.com/ajeet8395/Brainwave/',
      tech: 'Reactjs'
    },
    {
      title: 'Video Call App',
      backgroundImg: videoCall,
      projectUrl: 'https://video-call-flame-chi.vercel.app/',
      projectCode: 'https://github.com/ajeet8395/VideoCall',
      tech: 'Reactjs'
    },
    {
      title: 'Apple ',
      backgroundImg: apple,
      projectUrl: 'https://iphone-website-eta.vercel.app/',
      projectCode: 'https://github.com/ajeet8395/Iphone-Website',
      tech: 'React.js GSAP'
    },
    {
      title: 'Form builder Pro',
      backgroundImg: formbuilder,
      projectUrl: 'https://form-builder-pro-qosq.vercel.app/',
      projectCode: 'https://github.com/ajeet8395/FormBuilderPro',
      tech: 'Next JS'
    },
    {
      title: 'Weather App',
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

  return (
    <div id="projects" className="w-full bg-gray-50 dark:bg-zinc-900 py-16">
      <div className="max-w-[1240px] mx-auto px-4">
        <h2 className="lg:py-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-500 to-blue-500 text-center mb-12">
          What I&apos;ve Built
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="relative group overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative h-[300px] w-full cursor-pointer">
                <Image
                  src={project.backgroundImg}
                  alt={project.title}
                  className="rounded-xl object-cover"
                  layout="fill"
                />
                
                {/* Overlay with beautiful gradient and animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#5c598a]/90 to-[#516da9]/90 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex flex-col items-center justify-center h-full p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <h3 className="text-2xl font-bold mb-2 transform -translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                      {project.title}
                    </h3>
                    <p className="text-lg mb-6 transform -translate-y-4 transition-transform duration-300 delay-75 group-hover:translate-y-0">
                      {project.tech}
                    </p>
                    <div className="flex gap-4 transform -translate-y-4 transition-transform duration-300 delay-150 group-hover:translate-y-0">
                      <Link 
                        href={project.projectCode}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                      >
                        Code
                      </Link>
                      <Link 
                        href={project.projectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
                      >
                        Demo
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;