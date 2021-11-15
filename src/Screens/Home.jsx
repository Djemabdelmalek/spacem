import React from 'react'

function Home() {
    return (
        <div className="home min-h-screen flex flex-col lg:flex-row text-white items-center pt-36  space-y-48 lg:space-y-0 lg:justify-between lg:pr-52">
            <div className="flex flex-col items-center lg:items-start px-12 space-y-2 sm:px-28">
                <p className="uppercase text-head5 sm:text-2xl tracking-spacing3 font2">So, you want to travel to</p>
                <p className="text-head2 sm:text-head1 uppercase">Space</p>
                <p className="text-2xl text-center lg:text-justify sm:text-xl lg:max-w-md font2">Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>
            </div>
            <div className="">
                <a href='/destination' className="uppercase bg-white text-black rounded-full text-3xl tracking-spacing3 py-20 px-6 hover:shadow-btn transition duration-200 ease-in-out">Explore</a>
            </div>
        </div>
    )
}

export default Home
