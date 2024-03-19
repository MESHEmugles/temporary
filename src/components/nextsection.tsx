'use client'
import React, { useState, useEffect } from 'react';

const NextSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const nextScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', nextScroll);

    return () => window.removeEventListener('scroll', nextScroll);
  }, []);

  const nextClick = () => {
    const nextSection = document.getElementById('nextIcon');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex items-center md:justify-end md:mr-10 mr-0 md:-mt-[9em] mt-[34em] justify-center z-44' onClick={nextClick}>
        <div className={`${isScrolled ? 'hidden' : 'border-[0.1em] border-[#DD9F39] rounded-full cursor-pointer'}`}>
            <div id='nextIcon' className="bg-[#DD9F39] rounded-full mx-1.5 my-1.5">
                <svg className="w-[60px] h-[60px] sm:w-[36px] sm:h-[37px] lg:w-[48px] lg:h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth={'0.9'} d="M12 19V5m0 14-4-4m4 4 4-4" />
                </svg>
            </div>
        </div>
    </div>
  );
};

export default NextSection;
