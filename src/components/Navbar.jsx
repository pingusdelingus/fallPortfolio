import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {styles} from '../styles';
import {navLinks} from '../constants'
import {logo ,menu,close} from '../assets';
import { link } from 'framer-motion/client';
import '../App.css'

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.padding}  w-full flex items-center py-5 fixed top-0 z-20 `}
    style={{ backgroundColor : 'transparent' }}
    >
    
    {/* <div className="w-full flex justify-between items-center max-w-5xl mx-auto"> ORIGINAL LINE */}
    <div className="w-full flex justify-between items-center">
      <Link
      
      to="/"
      className="flex items-center gap-2"
      onClick={()  => {
        setActive("");
        window.scrollTo(0,0)
      }}
      >
      
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <p className=" text-white text-[18px] font-bold cursor-pointer">esteban <span className='sm:block hidden'></span>
        
        
        </p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map((link) => (
          <li
          key={link.id}
          className={`${
            active == link.title
            ? "text-white"
            : "text-secondary"
          
          } hover:text-blue-400 text-[18px] font-medium cursor-pointer`}
           onClick={() => {
            if(link.id == 'github'){
              window.open('https://github.com/pingusdelingus')
            }
            setActive(link.title);
                  const element = document.getElementById(link.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
          }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
          <div className="sm:hidden flex flex-1 
          justify-end items-center">
            <img 
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] 
            object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            />

            <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute
             top-20 right-0 mx-4 my-2 min-w-[140px]
              z-10 rounded-xl `}>
          </div>

    </div>
    </div>
    </nav>
  )
}

export default Navbar