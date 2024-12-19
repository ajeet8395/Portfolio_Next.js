import React, { useState, useEffect } from 'react';

const useTypingEffect = (texts, speed = 100, delay = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let typingTimer;

    if (!isDeleting && displayText.length < currentText.length) {
      typingTimer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }, speed);
    } else if (isDeleting && displayText.length > 0) {
      typingTimer = setTimeout(() => {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayText.length === currentText.length) {
      typingTimer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => 
        (prevIndex + 1) % texts.length
      );
    }

    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, currentTextIndex, texts, speed, delay]);

  return displayText;
};

const TypingAnimation = () => {
  const jobTitles = [
    'Web Designer', 
    'Front-End Web Developer', 
    'Full Stack Developer'
  ];

  const text = useTypingEffect(jobTitles);

  return (
    <h1 className='py-2 text-[#5651e5]'>
      {text}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default TypingAnimation;