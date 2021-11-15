import React from 'react'

import crew1 from '../assets/crew/image-douglas-hurley.webp' 
import crew2 from '../assets/crew/image-anousheh-ansari.webp'
import crew3 from '../assets/crew/image-mark-shuttleworth.webp'
import crew4 from '../assets/crew/image-victor-glover.webp'
import { useState } from 'react'

function Crew() {

    const [showCrew1, setShowCrew1] = useState(true);
    const [showCrew2, setShowCrew2] = useState(false);
    const [showCrew3, setShowCrew3] = useState(false);
    const [showCrew4, setShowCrew4] = useState(false);
   

    function SCrew1 () {
        setShowCrew1(true);
        setShowCrew2(false);
        setShowCrew3(false);
        setShowCrew4(false);
    }
    function SCrew2 () {
        setShowCrew1(false);
        setShowCrew2(true);
        setShowCrew3(false);
        setShowCrew4(false);
    }
    function SCrew3 () {
        setShowCrew1(false);
        setShowCrew2(false);
        setShowCrew3(true);
        setShowCrew4(false);
    }
    function SCrew4 () {
        setShowCrew1(false);
        setShowCrew2(false);
        setShowCrew3(false);
        setShowCrew4(true);
    }
    

    return (
        <div className="crew h-screen text-white flex flex-col items-center space-y-5 pt-28 sm:items-start sm:px-10 sm:pt-32 overflow-hidden lg:pt-48 lg:px-48">
            <div>
              <p className="text-xl uppercase font2 tracking-spacing1"><span className="text-gray-600 font-bold">02</span> Meet your crew</p>
            </div>
            <div className="flex flex-col items-center space-y-10 sm:flex-col-reverse flex-grow sm:space-y-0 sm:w-full lg:flex-row-reverse lg:items-start">
                <div className="w-4/5 border-b-2 border-white border-opacity-10 flex flex-row items-end justify-center sm:w-full sm:border-b-0 sm:flex-grow sm:w-full  lg:h-full">
                    <img src={crew1} alt="alt" className={`${showCrew1 ? "block" : "hidden"} w-1/2 md:w-1/3 lg:w-7/12 lg:h-full  "`} />
                    <img src={crew2} alt="alt" className={`${showCrew2 ? "block" : "hidden"} w-1/2 md:w-1/3 lg:w-7/12 lg:h-full  "`} />
                    <img src={crew3} alt="alt" className={`${showCrew3 ? "block" : "hidden"} w-1/2 md:w-1/3 lg:w-7/12 lg:h-full  "`} />
                    <img src={crew4} alt="alt" className={`${showCrew4 ? "block" : "hidden"} w-1/2 md:w-1/3 lg:w-7/12 lg:h-full  "`} />
                </div>
                <div className="flex flex-col items-center space-y-10 sm:flex-col-reverse w-full lg:h-full lg:justify-center lg:items-start">
                    <div className="flex flex-row justify-around items-center w-2/5 sm:mt-10 lg:w-2/12 lg:justify-between">
                        <button className={`${ showCrew1 ? "bg-white" : "bg-white bg-opacity-20" } w-3 h-3 rounded-full "`} onClick={SCrew1}></button>
                        <button className={`${ showCrew2 ? "bg-white" : "bg-white bg-opacity-20" } w-3 h-3 rounded-full "`} onClick={SCrew2}></button>
                        <button className={`${ showCrew3 ? "bg-white" : "bg-white bg-opacity-20" } w-3 h-3 rounded-full "`} onClick={SCrew3}></button>
                        <button className={`${ showCrew4 ? "bg-white" : "bg-white bg-opacity-20" } w-3 h-3 rounded-full "`} onClick={SCrew4}></button>
                        
                    </div>
                    <div className={`${showCrew1 ?  "block" : "hidden"} flex flex-col justify-center items-center space-y-5 lg:items-baseline "`}>
                        <div className="text-center lg:text-justify">
                            <p className="uppercase text-xl text-color2 lg:text-4xl">Commander</p>
                            <p className="uppercase text-3xl lg:text-6xl">Douglas Hurley</p>
                        </div>
                        <div>
                            <p className="text-center lg:text-justify font2 text-color2 text-xl w-80 lg:w-full lg:text-2xl leading-7"> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                            and former NASA astronaut. He launched into space for the third time as 
                            commander of Crew Dragon Demo-2.</p>
                        </div>
                    </div>
                    <div className={`${showCrew2 ?  "block" : "hidden"} flex flex-col justify-center items-center space-y-5 lg:items-baseline "`}>
                        <div className="text-center lg:text-justify">
                            <p className="uppercase text-xl text-color2 lg:text-4xl">Flight Engineer</p>
                            <p className="uppercase text-3xl lg:text-6xl"> Anousheh Ansari</p>
                        </div>
                        <div>
                            <p className="text-center lg:text-justify font2 text-color2 text-xl w-80 lg:w-full lg:text-2xl leading-7"> Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                            Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                            fly to the ISS, and the first Iranian in space. </p>
                        </div>
                    </div>
                    <div className={`${showCrew3 ?  "block" : "hidden"} flex flex-col justify-center items-center space-y-5 lg:items-baseline "`}>
                        <div className="text-center lg:text-justify">
                            <p className="uppercase text-xl text-color2 lg:text-4xl">Pilot</p>
                            <p className="uppercase text-3xl lg:text-6xl">Victor Glover</p>
                        </div>
                        <div>
                            <p className="text-center lg:text-justify font2 text-color2 text-xl w-80 lg:w-full lg:text-2xl leading-7"> Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                                International Space Station. Glover is a commander in the U.S. Navy where 
                                he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                                station systems flight engineer.</p>
                        </div>
                    </div>
                    <div className={`${showCrew4 ?  "block" : "hidden"} flex flex-col justify-center items-center space-y-5 lg:items-baseline "`}>
                        <div className="text-center lg:text-justify">
                            <p className="uppercase text-xl text-color2 lg:text-4xl">Mission Specialist</p>
                            <p className="uppercase text-3xl lg:text-6xl">Mark Shuttleworth</p>
                        </div>
                        <div>
                            <p className="text-center lg:text-justify font2 text-color2 text-xl w-80 lg:w-full lg:text-2xl leading-7">  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                            the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                            African to travel to space as a space tourist.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crew
