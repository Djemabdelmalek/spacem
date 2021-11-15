import React, { useState } from 'react'
import Logo from '../assets/shared/logo.svg'
import Hamburger from '../assets/shared/icon-hamburger.svg'
import close from '../assets/shared/icon-close.svg'



function Navbar({link}) {

    const [open, setOpen] = useState(false)
    function show() {
        setOpen(!open)
    }
    
    
    return (
        <div className="navbar flex flex-row items-center justify-between bg-transparent fixed top-0 left-0 right-0 text-white p-8 sm:py-0 sm:pr-0">
            <div>
               <a href="/"> <img src={Logo} id='menu'  className="h-14" alt='logo'/></a>
            </div>
            <div className="z-30 sm:hidden">
                <img src={!open ? Hamburger : close}  className="h-7 cursor-pointer" onClick={show} alt="menu" />
            </div>
            <div className="hidden lg:block line bg-white bg-opacity-20 absolute left-48 w-3/12 z-40">

            </div>
            <div className={`w-8/12 links absolute ${ !open ? '-right-96' :  'right-0' } top-0 h-screen transition-all duration-500 ease-in-out sm:relative sm:h-auto sm:right-0 px-5 py-10`}>
                <ul className="uppercase flex flex-col justify-center tracking-spacing3 text-2xl space-y-10 pt-40 pl-10 sm:flex-row sm:space-x-0 sm:space-y-0 sm:pt-0 sm:pl-0 sm:text-subhead2 sm:justify-around lg:text-subhead3">
                    <a href='/' className={` ${ (link === '/') ? 'sm:border-b-2 sm:border-r-0 border-r-2'  : 'border-b-2 border-transparent hover:border-white hover:border-opacity-20 ' }  `} ><li><span className="sm:hidden lg:inline-block">00</span> Home</li></a>
                    <a href='/destination' className={` ${ (link === '/destination') ? 'sm:border-b-2 sm:border-r-0 border-r-2'  : 'border-b-2 border-transparent hover:border-white hover:border-opacity-20' }  `}><li><span className="sm:hidden lg:inline-block">01</span> Destination</li></a>
                    <a href='/crew' className={` ${ (link === '/crew') ? 'sm:border-b-2 sm:border-r-0 border-r-2'  : 'border-b-2 border-transparent hover:border-white hover:border-opacity-20'  } `} ><li><span className="sm:hidden lg:inline-block">02</span> Crew</li></a>
                    <a href='/technology' className={` ${ (link === '/technology') ? 'sm:border-b-2 sm:border-r-0 border-r-2'  : 'border-b-2 border-transparent hover:border-white hover:border-opacity-20 ' } `} ><li><span className="sm:hidden lg:inline-block">03</span> Technology</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
