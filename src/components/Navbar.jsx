import React from 'react'

function NavBar() {
  return (
    <div className='h-15 w-full text-md bg-black
     text-white border-b border-slate-300
     flex justify-between items-center font-mono 
     font-bold'>
  
   <ul className='pt-4 w-120 flex justify-evenly items-center'>
     <li>Home</li>
     <li>Feature</li>
     <li>Pricing</li>
     <li>AboutUs</li>
   </ul>
   <button className='h-8 w-25 mr-10 rounded-2xl bg-white text-black'>
      SignIn
   </button>
    </div>
  )
}

export default NavBar