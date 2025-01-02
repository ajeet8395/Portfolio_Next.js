import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectsCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    if (!isHovered) {
      timeoutRef.current = setTimeout(
        () => setCurrentIndex((prevIndex) => 
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        ),
        3000
      );
    }
    return () => resetTimeout();
  }, [currentIndex, isHovered, projects.length]);

  const handleSlideClick = (index) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const getSlideStyles = (index) => {
    const position = index - currentIndex;
    const baseClasses = "absolute transition-all duration-500 w-full max-w-[800px] h-[400px] cursor-pointer";
    
    let normalizedPosition = position;
    if (position > Math.floor(projects.length / 2)) {
      normalizedPosition = position - projects.length;
    } else if (position < -Math.floor(projects.length / 2)) {
      normalizedPosition = position + projects.length;
    }
    
    if (normalizedPosition === 0) {
      return `${baseClasses} z-20 translate-x-0 scale-100 opacity-100`;
    } else if (normalizedPosition === 1 || normalizedPosition === -projects.length + 1) {
      return `${baseClasses} z-10 translate-x-[50%] scale-[0.85] opacity-70 hover:opacity-85 hover:scale-[0.87]`;
    } else if (normalizedPosition === -1 || normalizedPosition === projects.length - 1) {
      return `${baseClasses} z-10 -translate-x-[50%] scale-[0.85] opacity-70 hover:opacity-85 hover:scale-[0.87]`;
    } else {
      return `${baseClasses} z-0 translate-x-[100%] scale-[0.7] opacity-0`;
    }
  };

  return (
    <div id="projects" className="w-full bg-gray-50 dark:bg-zinc-900 py-16">
      <div className="px-4 lg:px-0">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] text-center">
          Projects
        </p>
        <h2 className="lg:py-4 dark:text-gray-300 text-center">What I&apos;ve Built</h2>
        
        <div 
          className="relative h-[450px] lg:h-[500px] w-full flex items-center justify-center overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={getSlideStyles(index)}
              onClick={() => handleSlideClick(index)}
            >
              <div className="relative h-full w-full shadow-xl shadow-purple-700/40 rounded-xl group hover:bg-gradient-to-r from-[#5c598a] to-[#516da9] overflow-hidden">
                <Image 
                  className="rounded-xl group-hover:opacity-10 h-full w-full object-cover"
                  src={project.backgroundImg}
                  alt={project.title}
                />
                <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full px-4">
                  <h3 className="text-2xl text-white tracking-wider text-center">
                    {project.title}
                  </h3>
                  <p className="pb-4 pt-2 text-white text-center">{project.tech}</p>
                  <div className="grid grid-cols-2 gap-3 max-w-[300px] mx-auto">
                    <Link 
                      href={project.projectCode} 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                        Code
                      </p>
                    </Link>
                    <Link 
                      href={project.projectUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                        Demo
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-gradient-to-r from-[#807dac] to-[#6479a8]'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;