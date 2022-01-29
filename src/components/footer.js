import React from 'react'
import logo from '../images/logo.jpg'

const Footer = () =>{
     return(
          <div className='Footer'>
               <div className='Footer-1'>
                    <div className='Footer-logo'>
                         <img src={logo} alt="Logo"></img>
                    </div>
                    <div className='Footer-text'>
                         <p className='font-mono'>
                         © 2021 YourneedSolution. All rights reserved.
                         </p>
                    </div>
               </div>
          </div>
     )
}

export default Footer;

