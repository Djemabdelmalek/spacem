import React, { useState, useEffect } from 'react'
import tech1 from '../assets/technology/image-launch-vehicle-landscape.jpg'
import tech12 from '../assets/technology/image-launch-vehicle-portrait.jpg'
import tech2 from '../assets/technology/image-space-capsule-landscape.jpg'
import tech22 from '../assets/technology/image-space-capsule-portrait.jpg'
import tech3 from '../assets/technology/image-spaceport-landscape.jpg'
import tech32 from '../assets/technology/image-spaceport-portrait.jpg'

function Technology() {

    const [showtech1, setShowtech1] = useState(true)
    const [showtech2, setShowtech2] = useState(false)
    const [showtech3, setShowtech3] = useState(false)
    
    const [portrait,setPortrait] = useState(true)

    const [size, setSize] = useState(0)
    useEffect(() => {
        
        function updateSize(){
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [])

    function Showtechnology1(){
        setShowtech1(true)
        setShowtech2(false)
        setShowtech3(false)
    }
    function Showtechnology2(){
        setShowtech1(false)
        setShowtech2(true)
        setShowtech3(false)
    }
    function Showtechnology3(){
        setShowtech1(false)
        setShowtech2(false)
        setShowtech3(true)
    }
    return (
        <div className="technology h-screen text-white flex flex-col items-center space-y-5 pt-28 sm:items-start  sm:pt-32 overflow-hidden lg:pt-48 lg:px-48">
            <div className="px-10">
              <p className="text-xl uppercase font2 tracking-spacing1"><span className="text-gray-600 font-bold">03</span> Space launch 101</p>
            </div>
            <div className="flex flex-col items-center space-y-10  flex-grow sm:space-y-0 sm:w-full lg:flex-row-reverse  lg:justify-between lg:w-full">
                <div className="flex flex-row items-end sm:justify-center lg:items-center  w-full  sm:w-full lg:h-full lg:justify-end">
                    <img src={size < 1024  ? tech1 : tech12} alt="alt" className={`${showtech1? "block" : "hidden"} w-full"`} />
                    <img src={size < 1024 ? tech2 : tech22} alt="alt" className={`${showtech2 ? "block" : "hidden"} w-full"`} />
                    <img src={size < 1024 ? tech3 : tech32} alt="alt" className={`${showtech3 ? "block" : "hidden"} w-full"`} />
                </div>
                <div className="flex flex-col items-center space-y-10  w-full lg:flex-row lg:h-full lg:justify-center lg:items-center space-x-10">
                    <div className="flex flex-row justify-around items-center w-2/5 sm:mt-10 lg:w-2/12 lg:justify-between lg:flex-col space-y-5">
                        <button className={`${ showtech1 ? "bg-white text-color1" : "bg-transparent" } border border-white w-10 h-10 rounded-full "`} onClick={Showtechnology1}>1</button>
                        <button className={`${ showtech2 ? "bg-white text-color1" : "bg-transparent" } border border-white w-10 h-10 rounded-full "`} onClick={Showtechnology2}>2</button>
                        <button className={`${ showtech3 ? "bg-white text-color1" : "bg-transparent" } border border-white w-10 h-10 rounded-full "`} onClick={Showtechnology3}>3</button>      
                    </div>
                    <div className={`${showtech1 ?  "block" : "hidden"} flex flex-col justify-center items-center space-y-5 lg:items-baseline "`}>
                        <div className="text-center lg:text-justify">
                            <p className="uppercase text-xl text-color2 lg:text-4xl">The terminology...</p>
                            <p className="uppercase text-3xl lg:text-6xl">Space capsule</p>
                        </div>
                        <div>
                            <p className="text-center lg:text-justify font2 text-color2 text-xl w-96 lg:w-full lg:text-2xl leading-7"> A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                            capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                            you'll spend your time during the flight. It includes a space gym, cinema, 
                            and plenty of other activities to keep you entertained.</p>
                        </div>
                    </div>
                    <div className={`${showtech2 ?  "block" : "hidden"} flex flex-col justify-center items-center space-y-5 lg:items-baseline "`}>
                        <div className="text-center lg:text-justify">
                            <p className="uppercase text-xl text-color2 lg:text-4xl">The terminology...</p>
                            <p className="uppercase text-3xl lg:text-6xl">Spaceport</p>
                        </div>
                        <div>
                            <p className="text-center lg:text-justify font2 text-color2 text-xl w-96 lg:w-full lg:text-2xl leading-7">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                                by analogy to the seaport for ships or airport for aircraft. Based in the 
                                famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                                of the Earth’s rotation for launch.</p>
                        </div>
                    </div>
                    <div className={`${showtech3 ?  "block" : "hidden"} flex flex-col justify-center items-center space-y-5 lg:items-baseline "`}>
                        <div className="text-center lg:text-justify">
                            <p className="uppercase text-xl text-color2 lg:text-4xl">The terminology...</p>
                            <p className="uppercase text-3xl lg:text-6xl">Launch vehicle</p>
                        </div>
                        <div>
                            <p className="text-center lg:text-justify font2 text-color2 text-xl w-96 lg:w-full lg:text-2xl leading-7">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                            payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                            WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                            it's quite an awe-inspiring sight on the launch pad!</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Technology
