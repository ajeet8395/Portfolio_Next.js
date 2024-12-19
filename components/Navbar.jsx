import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../public/assets/11602236_21004063-ezgif.com-crop.gif';

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    {
      name: 'Resume',
      href: 'https://drive.google.com/uc?export=download&id=1T7_oOGLhmoyw_OD12--tNKVAqQCDmJnj',
    },
    { name: 'Contact', href: '/#contact' },
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
          <ul className="flex space-x-3 md:space-x-8">
            {linkData.map((link, index) => (
              <li
                key={index}
                className={`py-1 lg:py-3 text-[9px] md:text-sm uppercase hover:border-b transition-all duration-200 hover:font-bold ease-in-out text-white ${isScrolled ? 'hover:border-b-0' : ''}`}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;