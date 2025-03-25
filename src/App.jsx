import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import audio1 from './assets/audio1.mp3'
import sound2 from './assets/audio2.mp3'
import sound3 from './assets/audio3.mp3'
import sound4 from './assets/audio4.mp3'


const App = () => {

  function play(){
    new Audio(sound1).play
  }


  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary ">
        
          <div className= "bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
            <Hero />
            <div>
             {/* <script  src="../particles.js"></script> 
              <script defer src="../tmp.js"></script>  */}
            </div>
            <div className='flex flex-col items-center justify-center'>
              <About/>
              <Experience/>
              {/* <Tech />
              <Works />
              <Feedbacks/>
              <div className="relative z-0">
              <Contact/>
              <StarsCanvas/> */}
              </div>
            </div>
          </div> 
      </BrowserRouter>
  )
}

export default App
