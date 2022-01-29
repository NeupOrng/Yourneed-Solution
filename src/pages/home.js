import React from "react";

import woman from '../images/woman.png'



const Home = () => {
    return (
        <div 
            className="home w-full h-fit px4 justify-center" 
            id="home"
        >
            <div
                className="w-4/5 mx-auto justify-between flex flex-col md:flex-row"
            >
                <div
                        className="flex items-center text-left mx-5"
                    >
                        <div className="w-fit py-3">
                            <h1
                                className="font-black text-blue-800 text-3xl md:text-5xl"
                            >
                                Make IT work for your Business
                            </h1>
                            <ul
                                className="font-thin content" 
                            >
                                <li className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <p>Develop online customer strategies</p>
                                </li>
                                <li className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <p>Imporve your business operations with Digital transformation</p>
                                </li>
                                <li className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                    <p>Keep up with Industries 4.0 technologies</p>
                                </li>
                            </ul>
                            <div className='bot-con bg-blue-500 my-10 py-2 flex rounded-full w-40 px-4 justify-around text-white animate-bounce cursor-pointer  hover:bg-blue-600' >
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
                    <div
                        className=""
                    >
                        <img
                            className="image"
                            src={woman}
                            alt="woman"
                        ></img>
                    </div>
            </div>
        </div>
    )
}

export default Home;