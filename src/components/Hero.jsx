import React, { useEffect, useState } from 'react'

import { styles } from '../styles'
import { AvatarCanvas } from './canvas/Avatar';

const Hero = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <section className='relative w-full h-screen mx-auto'
    >
      <div className={'${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 flex ' + (isMobile ? 'flex-wrap' : '')}>
        <div className={`flex flex-row items-start gap-5 w-full`}>
          <div className='flex flex-col
          justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full
            bg-[#915eff]' />
            <div className='w-1 sm:h-80 h-40
            violet-gradient'/>
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915eff]'>Arslan</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop user interfaces and <br className='sm:block hidden' />
              web applications
            </p>
          </div>
        </div>

        <div className={'w-full ' + (isMobile ? 'max-h-[350px] min-h-[350px]': '')}>
          <AvatarCanvas />
        </div>
      </div>

    </section>
  )
}

export default Hero