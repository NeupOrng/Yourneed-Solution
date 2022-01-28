import React from "react";

import woman from '../images/woman.png'
import circle from '../images/circle.png'


const Home = () => {
    return (
        <div className="bg-white h-screen flex justify-between items-center px-20" id="home">
            <div className="flex flex-col">
                <h1 className="text-3xl">Make Your Business Grow With Technology</h1>
                <p className="text-3sm">
                by implement the cutting edge  solution to your business challenge
                </p>
            </div>
            <div className="">
                <img 
                    className="bottom-0 max-w-xl"
                    src={woman} 
                    alt="woman"></img>
            </div>
        </div>
    )
}

export default Home;