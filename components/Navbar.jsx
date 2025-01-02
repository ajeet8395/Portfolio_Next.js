import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { RiSuitcaseFill } from 'react-icons/ri';
import { MdOutlineContactPage } from 'react-icons/md';
import { useTheme } from 'next-themes'
import logo from '../public/assets/11602236_21004063-ezgif.com-crop.gif';
import { FiMoon, FiSun } from 'react-icons/fi';

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme()

  // Handle navbar positioning and shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShadow(scrollPosition >= 90);
      setIsScrolled(scrollPosition > 100); // Adjust this value as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkData = [
    { name: 'Home', href: '/', icon: <AiOutlineHome /> },
    { name: 'About', href: '/#about', icon: <BsFillInfoCircleFill /> },
    { name: 'Skills', href: '/#skills', icon: <RiSuitcaseFill /> },
    { name: 'Projects', href: '/#projects', icon: <FaGithub /> },
    {
      name: 'Resume',
      href: 'https://drive.google.com/uc?export=download&id=1T7_oOGLhmoyw_OD12--tNKVAqQCDmJnj',
      icon: <BsFillPersonLinesFill />,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/in/ajeet-singh-667143200/',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/ajeet8395',
    },
    { icon: <AiOutlineMail />, href: '/#contact' },
    { icon: <BsFillPersonLinesFill />, href: '/resume' },
  ];

  return (
    <div
      className={`
        fixed 
        ${isScrolled
          ? 'bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 w-fit rounded-full'
          : 'top-0 w-full hidden md:block'
        } 
        z-[100] 
        ${shadow ? 'shadow-xl' : ''} 
        bg-[#ecf0f3] 
        ease-in-out 
        duration-300
      `}
    >
      <div
        className={`
          flex 
          ${isScrolled ? 'justify-center rounded-full 2xl:px-10' : 'justify-between 2xl:px-16'} 
          items-center 
          h-full 
          px-2 
          bg-[#5651e5]
        `}
      >
        {!isScrolled && (
          <Link href="/" className="w-16 h-16">
            <Image src={logo} width="100" height="100" alt="Logo" />
          </Link>
        )}

        <div>
          <ul className="flex space-x-6 md:space-x-8 px-2 py-1 lg:px-0 lg:py-0">
            {linkData.map((link, index) => (
              <li
                key={index}
                className={`py-1 lg:py-3 ${isScrolled
                  ? 'text-lg hover:scale-150 transition-transform'
                  : 'text-[9px] md:text-sm uppercase '
                  } 
                transition-all duration-200 hover:font-bold ease-in-out text-white`}
              >
                <Link href={link.href}>
                  {isScrolled ? link.icon : link.name}
                </Link>
              </li>
            ))}
            <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="bg-[#5651e5] pt-[4.5px] md:pt-3 text-white cursor-pointer shadow-none">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
