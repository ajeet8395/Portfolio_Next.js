import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SkillCard = ({ name, src }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    
    const enterAnimation = () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.2,
        ease: 'power2.out'
      });
    };

    const leaveAnimation = () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    };

    card.addEventListener('mouseenter', enterAnimation);
    card.addEventListener('mouseleave', leaveAnimation);

    return () => {
      card.removeEventListener('mouseenter', enterAnimation);
      card.removeEventListener('mouseleave', leaveAnimation);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className='flex items-center px-4 py-1 border border-[#5651e5] rounded-full 
        bg-white dark:bg-zinc-900 cursor-pointer min-w-[200px]'
    >
      <div className='grid grid-cols-3 gap-3 justify-center items-center'>
        <div className='m-auto col-span-1 p-2'>
          <Image src={src} width={44} height={44} alt={name} />
        </div>
        <div className='col-span-2 flex flex-col items-center justify-center dark:text-gray-400'>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;