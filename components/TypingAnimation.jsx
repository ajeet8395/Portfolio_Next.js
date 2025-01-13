import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TypingAnimation = () => {
  const textRef = useRef(null);
  const jobTitles = [
    'Web Designer',
    'Front-End Web Developer',
    'Full Stack Developer',
  ];

  useEffect(() => {
    const textElement = textRef.current;
    let currentIndex = 0;

    // Create the main timeline
    const masterTl = gsap.timeline({ repeat: -1 });

    const animateText = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          currentIndex = (currentIndex + 1) % jobTitles.length;
        },
      });

      // Fade out current text
      tl.to(textElement, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        ease: 'power2.in',
      })
        // Change text content
        .call(() => {
          textElement.textContent = jobTitles[currentIndex];
        })
        // Animate in new text
        .set(textElement, { y: 20 })
        .to(textElement, {
          duration: 0.5,
          opacity: 1,
          y: 0,
          ease: 'power2.out',
        })
        // Hold
        .to(textElement, {
          duration: 2,
          ease: 'none',
        });

      return tl;
    };

    // Add gradient animation
    gsap.to(textElement, {
      duration: 3,
      backgroundPosition: '200% center',
      repeat: -1,
      ease: 'linear',
    });

    // Add animations to master timeline
    jobTitles.forEach(() => {
      masterTl.add(animateText());
    });

    return () => {
      masterTl.kill();
    };
  }, [jobTitles]);

  return (
    <h1
      ref={textRef}
      className="text-3xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
    >
      Web Designer
    </h1>
  );
};

export default TypingAnimation;
