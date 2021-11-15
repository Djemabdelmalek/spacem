import React from 'react'
import Moon from '../assets/destination/image-moon.webp'
import Mars from '../assets/destination/image-mars.webp'
import Europa from '../assets/destination/image-europa.webp'
import Titan from '../assets/destination/image-titan.webp'
import { useState } from 'react'

function Destination() {

    const [showMoon, setShowMoon] = useState(true);
    const [showMars, setShowMars] = useState(false);
    const [showEuropa, setShowEuropa] = useState(false);
    const [showTitan, setShowTitan] = useState(false);

    function SMoon () {
        setShowEuropa(false);
        setShowMars(false);
        setShowMoon(true);
        setShowTitan(false);
    }
    function SMars () {
        setShowEuropa(false);
        setShowMars(true);
        setShowMoon(false);
        setShowTitan(false);
    }
    function SEuropa () {
        setShowEuropa(true);
        setShowMars(false);
        setShowMoon(false);
        setShowTitan(false);
    }
    function STitan () {
        setShowEuropa(false);
        setShowMars(false);
        setShowMoon(false);
        setShowTitan(true);
    }
    
    return (
        <div className="destination min-h-screen text-white flex flex-col items-center space-y-10 pt-28 sm:items-start sm:px-10 sm:pt-32 lg:pt-48 lg:px-48">
            <div>
                <p className="text-xl uppercase font2 tracking-spacing1"><span className="text-gray-600 font-bold">01</span> Pick your destination</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-10 lg:flex-row lg:space-y-0 lg:justify-around flex-grow lg:px-32">
                <div className='w-60 lg:w-full'>
                    <img src={Moon} alt="planet" className={`"w-full h-full lg:w-1/2" ${showMoon ? "block" : "hidden"} `}/>
                    <img src={Mars} alt="planet" className={`"w-full h-full lg:w-1/2" ${showMars ? "block" : "hidden"} `}/>
                    <img src={Europa} alt="planet" className={`"w-full h-full lg:w-1/2" ${showEuropa ? "block" : "hidden"} `}/>
                    <img src={Titan} alt="planet" className={`"w-full h-full lg:w-1/2" ${showTitan ? "block" : "hidden"} `}/>
                </div>
                <div className="flex flex-col justify-center items-center space-y-10">
                    <div className="w-3/4">
                        <div className="flex flex-row justify-center justify-around uppercase font2 text-xl tracking-spacing3">
                            <button className={`"cursor-pointer" ${showMoon ? "border-b-2" : "border-transparent border-b-2 hover:border-white hover:border-opacity-20"} transition duration-200 `} onClick={SMoon}>Moon</button>
                            <button className={`"cursor-pointer" ${showMars ? "border-b-2" : "border-transparent border-b-2 hover:border-white hover:border-opacity-20"} transition duration-200 `} onClick={SMars}>Mars</button>
                            <button className={`"cursor-pointer" ${showEuropa ? "border-b-2" : "border-transparent border-b-2 hover:border-white hover:border-opacity-20"} transition duration-200 `} onClick={SEuropa}>Europa</button>
                            <button className={`"cursor-pointer" ${showTitan ? "border-b-2" : "border-transparent border-b-2 hover:border-white hover:border-opacity-20"} transition duration-200 `} onClick={STitan}>Titan</button>
                        </div>
                    </div>
                    <div className={`"flex flex-col space-y-10 divide-y-2 px-8 divide-white divide-opacity-5 content" ${showMoon ? "block" : "hidden"} `} >
                        <div className="flex flex-col items-center space-y-3 px-2">
                            <p className="text-7xl uppercase">Moon</p>
                            <p className="text-center text-2xl font2 leading-9">See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you’re there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.
                            </p>
                        </div>
                        <div className="flex flex-col items-center py-10 space-y-5 sm:flex-row sm:justify-around sm:space-y-0">
                            <div className="text-center space-y-5">
                                <p className="font2 text-xl uppercase tracking-spacing3">Avg. distance</p>
                                <p className="text-4xl uppercase">384,400 KM</p>
                            </div>
                            <div className="text-center space-y-5">
                                <p className="font2 text-xl uppercase tracking-spacing3">Est. Travel time</p>
                                <p className="text-4xl uppercase">3 days</p>
                            </div>
                        </div>
                    </div>
                    <div className={`"flex flex-col space-y-10 divide-y-2 px-8 divide-white divide-opacity-5 content" ${showMars ? "block" : "hidden"} `}  >
                        <div className="flex flex-col items-center space-y-3 px-2">
                            <p className="text-7xl uppercase">Mars</p>
                            <p className="text-center text-2xl font2 leading-9">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                            the tallest planetary mountain in our solar system. It’s two and a half times 
                            the size of Everest!
                            </p>
                        </div>
                        <div className="flex flex-col items-center py-10 space-y-5 sm:flex-row sm:justify-around sm:space-y-0 ">
                            <div className="text-center space-y-5">
                                <p className="font2 text-xl uppercase tracking-spacing3">Avg. distance</p>
                                <p className="text-4xl uppercase">225 mil. km</p>
                            </div>
                            <div className="text-center space-y-5">
                                <p className="font2 text-xl uppercase tracking-spacing3">Est. Travel time</p>
                                <p className="text-4xl uppercase">9 months</p>
                            </div>
                        </div>
                    </div>
                    <div className={`"flex flex-col space-y-10 divide-y-2 px-8 divide-white divide-opacity-5 content" ${showEuropa ? "block" : "hidden"} `} >
                        <div className="flex flex-col items-center space-y-3 px-2">
                            <p className="text-7xl uppercase">Europa</p>
                            <p className="text-center text-2xl font2 leading-9">The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                            winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                            ice skating, curling, hockey, or simple relaxation in your snug 
                            wintery cabin.
                            </p>
                        </div>
                        <div className="flex flex-col items-center py-10 space-y-5 sm:flex-row sm:justify-around sm:space-y-0">
                            <div className="text-center space-y-5">
                                <p className="font2 text-xl uppercase tracking-spacing3">Avg. distance</p>
                                <p className="text-4xl uppercase">628 mil. km</p>
                            </div>
                            <div className="text-center space-y-5">
                                <p className="font2 text-xl uppercase tracking-spacing3">Est. Travel time</p>
                                <p className="text-4xl uppercase"> 3 years</p>
                            </div>
                        </div>
                    </div>
                    <div className={`"flex flex-col space-y-10 divide-y-2 px-8 divide-white divide-opacity-5 content" ${showTitan ? "block" : "hidden"} `} >
                        <div className="flex flex-col items-center space-y-3 px-2">
                            <p className="text-7xl uppercase">titan</p>
                            <p className="text-center text-2xl font2 leading-9">The only moon known to have a dense atmosphere other than Earth, Titan 
                                is a home away from home (just a few hundred degrees colder!). As a 
                                bonus, you get striking views of the Rings of Saturn.
                            </p>
                        </div>
                        <div className="flex flex-col items-center py-10 space-y-5 sm:flex-row sm:justify-around sm:space-y-0">
                            <div className="text-center space-y-5">
                                <p className="font2 text-xl uppercase tracking-spacing3">Avg. distance</p>
                                <p className="text-4xl uppercase"> 1.6 bil. km</p>
                            </div>
                            <div className="text-center space-y-5">
                                <p className="font2 text-xl uppercase tracking-spacing3">Est. Travel time</p>
                                <p className="text-4xl uppercase">7 years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
