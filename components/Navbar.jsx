import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMail, AiOutlineHome } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsFillInfoCircleFill } from 'react-icons/bs';
import { RiSuitcaseFill } from 'react-icons/ri';
import { useTheme } from 'next-themes';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import logo from '../public/assets/11602236_21004063-ezgif.com-crop.gif';
import { FiMoon, FiSun } from 'react-icons/fi';

const IconContainer = ({ mouseX, icon, href, name, isThemeToggle, onClick }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const Component = isThemeToggle ? 'div' : Link;
  const props = isThemeToggle ? { onClick } : { href };

  return (
    <Component {...props}>
      <motion.div
        ref={ref}
        style={{ width }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-10 flex items-center justify-center relative rounded-full hover:bg-black/10 dark:hover:bg-white/10 backdrop-blur-sm"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute whitespace-nowrap left-1/2 -translate-x-1/2 -top-8 px-2 py-1 text-xs bg-white/10 backdrop-blur-md rounded-md dark:text-white"
            >
              {name}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="text-xl dark:text-white">
          {icon}
        </motion.div>
      </motion.div>
    </Component>
  );
};

const Divider = () => (
  <div className="h-8 w-px bg-gray-300 dark:bg-gray-700 mx-2" />
);

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const mouseX = useMotionValue(Infinity);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShadow(scrollPosition >= 90);
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkData = [
    { name: 'About', href: '/#about', icon: <BsFillInfoCircleFill /> },
    { name: 'Skills', href: '/#skills', icon: <RiSuitcaseFill /> },
    { name: 'Projects', href: '/#projects', icon: <FaGithub /> },
  ];

  return (
    <div className={`fixed z-[100] ${isScrolled ? 'bottom-4 left-1/2 transform -translate-x-1/2 w-fit' : 'top-0 w-full hidden md:block'}`}>
      {isScrolled ? (
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="flex items-center lg:gap-2 px-2 lg:px-6 lg:py-2 rounded-full border border-gray-200 dark:border-neutral-700 supports-backdrop-blur:bg-white/50 supports-backdrop-blur:dark:bg-black/50 backdrop-blur-md"
        >
          {/* Home icon */}
          <IconContainer
            mouseX={mouseX}
            icon={<AiOutlineHome />}
            href="/"
            name="Home"
          />

          {/* First divider */}
          <Divider />

          {/* Navigation items */}
          {linkData.map((link, index) => (
            <IconContainer
              key={index}
              mouseX={mouseX}
              icon={link.icon}
              href={link.href}
              name={link.name}
            />
          ))}

          {/* Resume and theme toggle */}
          <IconContainer
            mouseX={mouseX}
            icon={<BsFillPersonLinesFill />}
            href="https://drive.google.com/uc?export=download&id=1T7_oOGLhmoyw_OD12--tNKVAqQCDmJnj"
            name="Resume"
          />

          {/* Second divider */}
          <Divider />
          <IconContainer
            mouseX={mouseX}
            icon={theme === 'dark' ? <FiSun className='cursor-pointer'/> : <FiMoon className='cursor-pointer'/>}
            name={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            isThemeToggle={true}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </motion.div>
      ) : (
        <div className={`flex justify-between items-center h-full px-2 2xl:px-16 bg-gradient-to-r from-[#5651e5] via-[#ff3366] to-[#5651e5] ${shadow ? 'shadow-xl' : ''}`}>
          <Link href="/" className="w-16 h-16">
            <Image src={logo} width="100" height="100" alt="Logo" />
          </Link>
          <div>
            <ul className="flex space-x-8 px-2">
              {[{ name: 'Home', href: '/' }, ...linkData, { name: 'Resume', href: 'https://drive.google.com/uc?export=download&id=1T7_oOGLhmoyw_OD12--tNKVAqQCDmJnj' }].map((link, index) => (
                <li key={index} className="py-3 text-sm uppercase transition-all duration-200 hover:font-bold text-white">
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
              <div
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="pt-3 text-white cursor-pointer"
              >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;