import React from 'react'
import logo from '../images/logo.jpg'


const Navbar = ({toggle}) =>{
  return (
    <nav className='top-0 h-fit justify-between bg-white flex items-center fixed w-screen z-50'>

      <div className='mx-10 w-fit'>
        <img src={logo} 
        alt='company logo' 
        className='max-h-10 '></img>
      </div>
      
      <div className='flex justify-end pr-4 ml-auto items-center w-screen contect-us mr-4 md:flex hidden'>
        <a className='px-5 py-7 hover:bg-slate-100' href='#home'>Home</a>
        <a className='px-5 py-7 hover:bg-slate-100' href='#services'>Services</a>
        <a className='px-5 py-7 hover:bg-slate-100' href='#solution'>Solution</a>
        <a className='px-5 py-7 hover:bg-slate-100' href='#about'>About</a>
        <div className='w-1/3  justify-center items-center'>
        <div className='bg-blue-500 mx-auto py-2 flex rounded-full w-40 px-4 justify-around text-white animate-bounce cursor-pointer hover:bg-blue-600'>
              <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5" fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor">
              <path strokeLinecap="round" 
              strokeLinejoin="round"
              strokeWidth={2} 
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <b>Contact Us</b>
          </div>
        </div>
      </div>
      <div className='mr-6 py-7 cursor-pointer md:hidden' onClick={toggle}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M4 6h16M4 12h16M4 18h16" 
        />
        </svg>
      </div>
      
    </nav>
  )
}


export default Navbar; 
