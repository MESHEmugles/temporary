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
    <div className='flex items-center justify-center'>
        <div className={`${isScrolled ? 'hidden' : 'border-[0.1em] border-[#DD9F39] rounded-full max-w-[23%] h-18 fixed z-10 2xl:right-[40em] xl:right-40 md:right-5 2xl:bottom-[10em] xl:bottom-[3em] lg:bottom-[18em] md:bottom-[27em] bottom-28'}`}>
            <div id='nextIcon' className="bg-[#DD9F39] rounded-full mx-2 my-2" onClick={nextClick}>
                <svg className="w-[60px] h-[60px] sm:w-[36px] sm:h-[37px] lg:w-[48px] lg:h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap='round' strokeLinejoin='round' strokeWidth={'0.9'} d="M12 19V5m0 14-4-4m4 4 4-4" />
                </svg>
            </div>
        </div>
    </div>
  );
};

export default NextSection;
