import React from 'react'
import {motion} from 'framer-motion'
import { styles  } from '../styles'
import { SectionWrapper } from '../hoc';

//import { Room } from './canvas/room.jsx'
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

   
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      
    <div className='flex flex-col justify-center items-center mt-5'>

      <div className='w-5 h-5 rounded-full bg-[#915eff]'    />

      <div className='w-1 sm:h-65 h-25 violet-gradient'/>

      <div>
        <h1 data-scroll data-scroll-speed="0.5"className={`${styles.heroHeadText}text-[#8aadf4]`}>

          hi, i'm <span className='text-text-[#915eff]'> esteban</span>
        </h1>
        <p data-scroll data-scroll-speed="0.7" className={`${styles.heroSubText} m5-2 text-[#7dc4e4]`}>
          an aspiring mathematician and computer scientist <br/>
          i enjoy studying set theory and building automation apps in my free time
        </p>
      </div>
      <div>

      
      <h3 className='py-20 text-pretty m5-2 text-blue-500'>
      
        click "About" or scroll down to learn more!
      </h3>
      </div>
    </div>
    

    </div>
      
    </section>
  )
}

export default SectionWrapper(Hero, "hero")
