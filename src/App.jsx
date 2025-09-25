

import './App.css'
import Aboutus from './components/Aboutus'
import { BentoGridDemo } from './components/Bentogrid'
import NavBar from './components/Navbar'

import HeroPage from './ui/HeroPage'

function App() {

  return (
    <>
    <div >
         <NavBar/>
    </div>
  <div className='text-5xl h-168 w-full bg-black text-white'>
    <HeroPage/>
  </div>
  <div className='  h-full w-full bg-black pt-20'>
     <BentoGridDemo/>
  </div>
  <div className='h-full w-full bg-black pt-10'>
   <Aboutus/>
  </div>
   
    </>
  )
}

export default App
