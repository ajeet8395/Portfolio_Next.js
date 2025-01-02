import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SkillCard from './SkillCard'; // Your SkillCard component

// Skills data
const row1 = [
  { name: 'HTML', src: '/assets/skills/html.png' },
  { name: 'CSS', src: '/assets/skills/css.png' },
  { name: 'JavaScript', src: '/assets/skills/javascript.png' },
  { name: 'React', src: '/assets/skills/react.png' },
  { name: 'Tailwind', src: '/assets/skills/tailwind.png' },
];

const row2 = [
  { name: 'Node.js', src: '/assets/skills/node.png' },
  { name: 'MongoDB', src: '/assets/skills/mongo.png' },
  { name: 'Firebase', src: '/assets/skills/firebase.png' },
  { name: 'AWS', src: '/assets/skills/aws.png' },
  { name: 'Shopify', src: '/assets/skills/shopify.png' },
];

const Skills = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    // Function to handle animation
    const animateRow = (ref, direction) => {
      const container = ref.current;

      // Clone the content for seamless looping
      const clonedContent = container.innerHTML;
      container.innerHTML += clonedContent;

      // Animate
      const animation = gsap.fromTo(
        container,
        { x: direction === 'left' ? 0 : '-50%' }, // Start position
        {
          x: direction === 'left' ? '-50%' : 0, // End position
          duration: 15, // Adjust the speed of scrolling
          ease: 'none',
          repeat: -1, // Infinite loop
        }
      );

      return () => {
        animation.kill(); // Clean up on unmount
      };
    };

    // Animate both rows
    const cleanupRow1 = animateRow(row1Ref, 'left');
    const cleanupRow2 = animateRow(row2Ref, 'right');

    return () => {
      cleanupRow1();
      cleanupRow2();
    };
  }, []);

  return (
    <div className="w-full mb-40 overflow-hidden">
      <h2 className="text-center text-4xl font-bold mb-4 text-[#5651e5]">My Skills</h2>

      {/* Row 1 */}
      <div className="relative overflow-hidden h-20">
        <div ref={row1Ref} className="flex gap-8">
          {row1.map((skill, index) => (
            <SkillCard key={`row1-${index}`} name={skill.name} src={skill.src} />
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative overflow-hidden h-20">
        <div ref={row2Ref} className="flex gap-8">
          {row2.map((skill, index) => (
            <SkillCard key={`row2-${index}`} name={skill.name} src={skill.src} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
