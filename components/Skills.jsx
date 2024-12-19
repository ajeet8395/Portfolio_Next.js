import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SkillCard from './SkillCard';
import 'swiper/css';
import 'swiper/css/autoplay';

// Import all skill assets
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import NextJS from '../public/assets/skills/nextjs.png';
import Bootstrap from '../public/assets/skills/bootstrap.png';
import WordPress from '../public/assets/skills/wordpress2.png';
import Node from '../public/assets/skills/node.png';
import MongoDB from '../public/assets/skills/mongo.png';

// Skill data
const skills = [
  { name: 'HTML', src: Html },
  { name: 'CSS', src: Css },
  { name: 'JavaScript', src: Javascript },
  { name: 'React', src: ReactImg },
  { name: 'Tailwind', src: Tailwind },
  { name: 'Bootstrap', src: Bootstrap },
  { name: 'GitHub', src: Github },
  { name: 'Next.js', src: NextJS },
  { name: 'WordPress', src: WordPress },
  { name: 'Node.js', src: Node },
  { name: 'MongoDB', src: MongoDB },
];

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4 dark:text-gray-300'>What I Can Do</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          loop={true}
          speed={300}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className='w-full py-8'
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index} className='py-4 px-2'>
              <SkillCard name={skill.name} src={skill.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;