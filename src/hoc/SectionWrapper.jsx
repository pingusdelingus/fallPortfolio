import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) => 
  function HOC() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.5,
      triggerOnce: false  // Keeps animating each time it enters view
    });

    useEffect(() => {
      if (inView) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return (
      <motion.section
        ref={ref}
        variants={staggerContainer(0.2, 0)}  // Use the staggerContainer with specified values
        initial="hidden"
        animate={controls}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />  {/* Ensure this component is rendering something */}
      </motion.section>
    );
  };

export default SectionWrapper;
