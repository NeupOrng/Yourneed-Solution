import React from 'react';

const Dropdown = ({isOpen, toggle}) => {
     return(
          <div 
               className={
                    isOpen 
                         ? 'grid grid-row text-center items-center bg-white fixed w-screen mt-16 py-5 Class drop-shadow-md top-0'
                         : 'hidden'
               }
               
               onClick={toggle}
          >
               <a className='py-4 hover:bg-slate-100' href='#home'>Home</a>
               <a className='py-4 hover:bg-slate-100' href='#services'>Services</a>
               <a className='py-4 hover:bg-slate-100' href='#solution'>Solution</a>
               <a className='py-4 hover:bg-slate-100' href='#about'>About</a>
               <div className='flex py-4 justify-center items-center'>
                    <a className='bg-blue-500 py-2 flex rounded-full w-40 px-4 justify-around text-white animate-bounce cursor-pointer hover:bg-blue-600'
                    href='#contactus'
                    >
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-5 w-5" 
                         fill="none" 
                         viewBox="0 0 24 24" 
                         stroke="currentColor">
                         <path strokeLinecap="round" 
                         strokeLinejoin="round"
                         strokeWidth={2} 
                         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                         </svg>
                         <b>Contact Us</b>
                    </a>
               </div>
          </div>
          )
} 


export default Dropdown;