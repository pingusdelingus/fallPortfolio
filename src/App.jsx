import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar } from './components'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <div className='flex flex-col items-center justify-center'>
            <About />
            <Experience />
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
