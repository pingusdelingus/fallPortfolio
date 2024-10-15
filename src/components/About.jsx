import React from 'react'
import {Tilt}  from 'react-tilt';
import {motion} from 'framer-motion'

import {styles} from '../styles';
import {fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index,title,icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.90)} 
      className='w-full green-pink-gradient rounded-[20px] shadow-card'>

        
          <div options={{
            max: 45,
            scale: 1,
            speed: 45
          }}
          
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className='text-purple-300 text-[20px] font-bold text-center'> {title} </h3>
          </div>
      </motion.div>
      </Tilt>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}> Introduction</p>
      <h2 className={styles.sectionHeadText}>

      </h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className='center text-secondary text-[17px] max-w03xl leading-[30px]'>
        Esteban is a sophomore at the University of Miami, currently studying Mathematics, Data Science & AI, and Computer Science.
        He has devoted his time to working as an educator with K-12 students and as a research assistant for the TPTP World Project. 
        His enthusiasm for teaching stems from his conviction that aiding students in understanding mathematics conceptually promotes the development of analytical and critical thinking, invaluable resources in the modern world.
       In his free time, he enjoys filmmaking, playing chess, and exploring the outdoors.

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key ={service.title} index={index} {...service} />
      ))}

    </div>
    </>
  )
}

export default SectionWrapper(About, "about")