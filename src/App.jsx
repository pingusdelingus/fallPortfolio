import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';

const App = () => {


  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary ">
        
          <div className= "bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
            {/* <div id='particles-js'></div> */}
            <Hero />
            <div>
             {/* <script  src="../particles.js"></script> 
              <script defer src="../tmp.js"></script>  */}

            </div>
            <div className='flex flex-col items-center justify-center'>
              <About/>
              <Experience/>
              <Tech />
              <Works />
              <Feedbacks/>
              <div className="relative z-0">
              <Contact/>
              <StarsCanvas/>



              </div>




            </div>



          </div>


          </div>



      </BrowserRouter>




  )
}

export default App
